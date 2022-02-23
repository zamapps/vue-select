<template>
  <v-select :options="options"></v-select>
</template>

<script>
import vSelect from 'vue-select'
import countryCodes from '../data/countryCodes'

export default {
  name: 'CountrySelect',
  components: { vSelect },
  data: () => ({
    options: countryCodes,
  }),
}
</script>

<style scoped></style>
