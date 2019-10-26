<template>
  <v-select
    taggable
    multiple
    no-drop
    :map-keydown="handlers"
    placeholder="try tagging with space or comma to submit"
  />
</template>

<script>
export default {
  name: 'CustomHandlers',
  methods: {
    handlers (map, vm) {
      const createTag = e => {
        e.preventDefault();
        vm.typeAheadSelect();
        vm.searchEl.focus();
      };

      return {
        ...map, //  defaults
        32: createTag,  //  space
        188: createTag,  //  comma
      };
    },
  },
};
</script>
