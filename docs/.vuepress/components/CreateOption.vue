<template>
  <div>
    <v-select
      v-model="selected"
      multiple
      taggable
      :options="options"
      :create-option="text => ({ label: text, isTag: true })"
    />
    <pre><code>selected: {{ selected }}</code></pre>
  </div>
</template>

<script>
export default {
  data: () => ({
    selected: [],
    options: [
      {
        label: "Vue",
        isTag: false
      }
    ]
  })
};
</script>
