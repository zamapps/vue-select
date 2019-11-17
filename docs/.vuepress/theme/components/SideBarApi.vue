<template>
  <ul>
    <li>
      <section class="sidebar-group depth-0">
        <p class="sidebar-heading open"><span>API</span></p>
        <ul class="sidebar-links sidebar-group-items">
          <li v-for="section in docs">
            <router-link
              :to="section.url"
              :class="linkClass(section.url)"
            >
              {{ section.title }}
            </router-link>

            <ul v-if="section.active" class="sidebar-sub-headers">
              <li v-for="link in section.links" :key="link" class="sidebar-sub-header">
                <router-link
                  :to="`${section.url}#${link}`"
                  :class="linkClass(`${section.url}#${link}`)"
                >
                  {{ link }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </li>
  </ul>
</template>

<script>
import { isActive } from '@vuepress/theme-default/util'
import documentation from '@dynamic/api'

export default {
  name: "SideBarApi",
  methods: {
    isActive,
    linkClass (path) {
      return {
        'active': isActive(this.$route, path),
        'sidebar-link': true
      }
    },
  },
  computed: {
    docs () {
      return ['Props', 'Events', 'Slots'].map(section => {
        const lowercase = section.toLowerCase();
        return {
          title: section,
          url: `/api/${lowercase}.html`,
          links: documentation[lowercase].map(({name}) => name).sort(),
          active: this.isActive(this.$route, `/api/${lowercase}.html`),
        };
      });
    }
  }
}
</script>

<style scoped>
  ul {
    padding-bottom: 1rem;
  }
</style>
