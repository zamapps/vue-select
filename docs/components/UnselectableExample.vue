<template>
  <v-select
    placeholder="Choose a book to read"
    label="title"
    :options="books"
    :selectable="(option) => !option.author.lastName.includes('Woodhouse')"
  />
</template>
<script>
import books from "../assets/data/books.js";
export default {
  computed: {
    books: () => books,
  },
};
</script>
