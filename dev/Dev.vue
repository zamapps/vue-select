<template>
  <div id="app" class="font-sans px-5 py-5">
    <v-select :options="countries"/>
<!--    <ListSelect :options="countries" />-->
<!--    <paginated />-->
  </div>
</template>

<script>
import vSelect from '../src/components/Select';
import ListSelect from './ListSelect';
import Paginated from './Paginated';
import Sandbox from '../docs/.vuepress/components/Sandbox';

import countries from '../docs/.vuepress/data/countryCodes';
import books from '../docs/.vuepress/data/books';

export default {
  components: {vSelect, Sandbox, ListSelect, Paginated},
  computed: {
    countries: () => countries,
    books: () => books,
  },
};
</script>

<style lang="scss">
  @import "../src/scss/vue-select";

  html,
  body {
    margin: 0;
    height: 100%;
    font-family: -apple-system, sans-serif;
  }

  #app {
    height: 100%;
    max-width: 50rem;
    margin: 0 auto;
  }

  hr {
    border: none;
    border-bottom: 1px solid #cacaca;
    margin-bottom: 1em;
    padding-top: 1em;
    width: 90%;
  }
</style>
