<template>
  <renderless :options="options" multiple v-slot="select">
    <div class="border-l border-r border-b border-gray-400 rounded">
      <input
          v-bind="select.scope.search.attributes"
          v-on="select.scope.search.events"
          class="border-b border-t border-gray-400 rounded-t px-2 py-1"
          placeholder="Search for a Country"
      />

      <div class="options">
        <ul class="w-1/2 px-3 relative">
          <li class="text-gray-600 text-center py-1 sticky top-0 bg-white">Selected</li>
          <li v-for="selected in select.scopedValues" class="w-full">
            <button class="hover:cursor-pointer text-left overflow-y-scroll"
                    @click="select.deselect(selected)">
              <span class="text-red-500">-</span> {{ selected.label }}
            </button>
          </li>
        </ul>

        <ul class="w-1/2 px-3 relative border-l border-gray-400">
          <li class="text-gray-600 text-center py-1 sticky top-0 bg-white">Available</li>
          <li v-for="option in select.scopedOptions" class="w-full">
            <button class="hover:cursor-pointer text-left overflow-y-scroll"
                    v-bind="option.attributes" @click="select.select(option)">
              <span class="text-blue-500">+</span> {{ option.label }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </renderless>
</template>

<script>
import Renderless from '../src/components/Renderless';
import countries from '../docs/.vuepress/data/countries';

export default {
  name: 'ListSelect',
  components: {Renderless},
  computed: {
    options: () => countries,
  },
};
</script>

<style scoped>
  input {
    display: flex;
    width: 100%;
  }

  .options {
    display: flex;
  }

  .options ul {
    list-style: none;
    flex-grow: 1;
    max-height: 20rem;
    overflow-y: scroll;
  }
</style>
