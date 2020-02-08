<template>
  <div id="app" class="font-sans px-5 py-5">
    <v-select v-bind="jest" />
    <!--    <ListSelect :options="countries" />-->
    <!--    <paginated />-->

    <!--        <v-select multiple :options="books" label="title">-->
    <!--            <template #selected-option="selected">-->
    <!--        <span :class="selected.bindings.class">-->
    <!--            {{ selected.title }} {{ selected.author.firstName }} {{ selected.author.lastName }}-->
    <!--            <component-->
    <!--                ref="deselectButtons"-->
    <!--                :is="selected.deselect.component"-->
    <!--                v-if="selected.deselect.bindings.multiple"-->
    <!--                v-bind="selected.deselect.bindings"-->
    <!--                v-on="selected.deselect.events"-->
    <!--            />-->
    <!--          </span>-->
    <!--            </template>-->
    <!--            <template #option="{ title, author, attributes, events }">-->
    <!--                <li v-bind="attributes" v-on="events">{{ title }} {{ author.firstName }} {{-->
    <!--                    author.lastName }}-->
    <!--                </li>-->
    <!--            </template>-->
    <!--        </v-select>-->
  </div>
</template>

<script>
import vSelect from '../src/components/Select';
import ListSelect from './ListSelect';
import Paginated from './Paginated';
import Sandbox from '../docs/.vuepress/components/Sandbox';

import countries from '../docs/.vuepress/data/countryCodes';
import books from '../docs/.vuepress/data/books';

const randomBook = (id) => {
  const rand = Math.floor(Math.random() * Math.floor(books.length - 1));
  return {...books[rand], id};
}

export default {
  components: {vSelect, Sandbox, ListSelect, Paginated},
  computed: {
    countries: () => countries,
    books: () => Array(100).fill(0).map((num, index) => randomBook(index)),
    jest: () => ({value: [{label: "one"}], options: [{label: "one"}]}),
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
