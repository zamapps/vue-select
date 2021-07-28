<template>
  <div>
    <header>
      <nav class="flex justify-between items-center px-5">
        <h1 class="font-bold text-xl text-gray-800">Vue Select</h1>

        <ContentSearch />

        <ul class="flex items-center space-x-4">
          <li>
            <NuxtLink to="/sandbox">Sandbox</NuxtLink>
          </li>
          <li>
            <ExternalLink href="https://github.com/sagalbot/vue-select">
              GitHub
            </ExternalLink>
          </li>
        </ul>
      </nav>
    </header>

    <div>
      <nav></nav>
    </div>
  </div>
</template>

<script>
import ContentSearch from "~/components/ContentSearch.vue";
import ExternalLink from "~/layouts/ExternalLink.vue";

export default {
  components: { ExternalLink, ContentSearch },
};
</script>
