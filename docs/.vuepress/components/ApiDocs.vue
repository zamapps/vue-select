<template>
  <div>
    <h1>Vue Select Props</h1>

    <div class="search-box">
      <input id="props-search" type="search" v-model="query" placeholder="Search for props...">
    </div>

    <ul>
      <li v-for="prop in filtered">
        <h2 :id="prop.name">
          <a :href="`#${prop.name}`" aria-hidden="true" class="header-anchor">#</a>
          {{ prop.name }}

          <small><code>{{ prop.type }}</code></small>

          <template v-if="prop.since.hasOwnProperty('version')">
            <a :href="prop.since.link">
              <Badge :text="`+${prop.since.version}`" />
            </a>
          </template>
        </h2>

        <div v-html="markdown(prop.description)"></div>

        <ul v-if="prop.see">
          <li v-for="see in prop.see"><a :href="see">{{ see }}</a></li>
        </ul>

        <pre><code v-html="prop.defaultRendered"></code></pre>

        <Content :slot-key="prop.name"></Content>
      </li>
    </ul>
  </div>
</template>

<script>
import documentation from '@dynamic/api'
import { highlight, languages } from 'prismjs';
import Markdown from 'markdown-it';

const md = new Markdown();

export default {
  name: "ApiDocs",
  methods: {
    markdown: snippet => md.render(snippet),
    highlight: snippet => highlight(snippet, languages.javascript, 'javascript'),
    /**
     * @param tag
     * @return {Object}
     */
    formatTag (tag, type) {
      let rendered = `@${tag.title}`;
      if (tag.hasOwnProperty('type')) {
        rendered += ' {' + tag.type.name + '}'
      }
      if (tag.hasOwnProperty('name')) {
        rendered += ` ${tag.name} `
      }
      if (tag.hasOwnProperty('description')) {
        rendered += ` ${tag.description}`
      }
      return rendered;
    },
    getSince (tags) {
      const since = {};
      if (tags.hasOwnProperty('since')) {
        since.version = tags.since[0].description;
        since.link = `https://github.com/sagalbot/vue-select/releases/tag/v${tags.since[0].description}`
      }
      return since;
    },
    getSee (tags) {
      const since = [];
      if (tags.hasOwnProperty('see')) {
        tags.see.forEach(({description}) => since.push(description));
      }
      return since;
    },
    getParams (tags) {
      const params = [];
      if (tags.hasOwnProperty('params')) {
        tags.params.forEach((tag) => params.push(this.formatTag(tag)));
      }
      return params;
    },
    getType (prop) {
      if (prop.hasOwnProperty('type')) {
        let type = prop.type.name;
        if (type === 'func') {
          type = 'function';
        }
        return type.charAt(0).toUpperCase() + type.slice(1)
      }
      return 'mixed';
    },
    getDefaultVal (prop, params) {
      let declaration = '';
      let returnDeclaration = '';

      if (prop.tags.hasOwnProperty('return')) {
        console.log(prop.tags);
        returnDeclaration = prop.tags.return[0];
      }

      if (params.length || returnDeclaration.length) {
        declaration += '/*\n';
        params.forEach(param => declaration += ' * ' + param + '\n');
        declaration += ` * @return ${returnDeclaration}\n`;
        declaration += ' */ \n';
      }

      if (prop.hasOwnProperty('defaultValue')) {
        declaration += 'default: ' + prop.defaultValue.value;
      }

      return this.highlight(declaration);
    }
  },
  data () {
    return {
      query: ''
    }
  },
  computed: {
    filtered () {
      return this.props.filter(prop => this.query.length ? prop.name.includes(this.query) : true);
    },
    props () {
      return documentation.props.map(prop => {
        const since = this.getSince(prop.tags);
        const see = this.getSee(prop.tags);
        const params = this.getParams(prop.tags);
        const type = this.getType(prop);
        const defaultRendered = this.getDefaultVal(prop, params);

        return {
          ...prop,
          since,
          see,
          params,
          type,
          defaultRendered
        }
      }).sort((a, b) => a.name > b.name);
    },
  },
}
</script>

<style scoped>
  h2 {
    margin-top: -3.1rem;
    padding-top: 4.6rem;
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .search-box {
    width: 100%;
  }

  .search-box [type=search] {
    width: 100%;
  }
</style>
