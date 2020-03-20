<template>
  <div>
    <v-select
      v-model="selected"
      taggable
      multiple
      label="label"
      :options="[]"
      :create-option="label => ({ label, isTag: true })"
      :reduce="option => option.isTag"
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
