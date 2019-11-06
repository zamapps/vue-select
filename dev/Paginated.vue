<template>
  <v-select :options="options">
    <template v-slot:option="{ option, attributes, events }">
      <li v-if="option.label === 'pagination'">
        <button @click="offset -= 10">Prev</button><button @click="offset += 10">Next</button>
      </li>
      <li v-else v-bind="attributes" v-on="events">{{ option.label }}</li>
    </template>
  </v-select>
</template>

<script>
import countries from '../docs/.vuepress/data/countries';

export default {
  name: 'Paginated',
  data: () => ({
    countries,
    offset: 0,
    limit: 10,
  }),
  computed: {
    options () {
      return [...this.countries.slice(this.offset, this.limit + this.offset), 'pagination'];
    },
  },
};
</script>

<style scoped>
  .pagination {
    display: flex;
    margin: .25rem .25rem 0;
  }

  .pagination button {
    flex-grow: 1;
  }

  .pagination button:hover {
    cursor: pointer;
  }
</style>
