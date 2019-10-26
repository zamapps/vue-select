<template>
  <div id="app">
    <sandbox hide-help v-slot="config">
      <v-select taggable multiple no-drop :map-keydown="handlers"/>
    </sandbox>
  </div>
</template>

<script>
import vSelect from '../src/components/Select';
import Sandbox from '../docs/.vuepress/components/Sandbox';
// import countries from '../docs/.vuepress/data/countryCodes';
// import books from '../docs/.vuepress/data/books';

export default {
  components: {Sandbox, vSelect},
  methods: {
    handlers (map, vm) {
      const createTag = e => {
        e.preventDefault();
        vm.typeAheadSelect();
        vm.searchEl.focus();
      };

      return {
        ...map,
        9: createTag,
        13: createTag,
        32: createTag,
        188: createTag,
      };
    },
  },
};
</script>

<style>
  html,
  body {
    margin: 0;
    height: 100%;
    font-family: -apple-system, sans-serif;
  }

  #app {
    height: 100%;
  }

  hr {
    border: none;
    border-bottom: 1px solid #cacaca;
    margin-bottom: 1em;
    padding-top: 1em;
    width: 90%;
  }
</style>
