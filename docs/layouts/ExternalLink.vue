<template>
  <a :href="href" class="flex items-center">
    <slot></slot>
    <img
      src="~assets/svg/ExternalLink.svg?data"
      aria-hidden="true"
      class="w-5 h-5 opacity-50"
      alt="External Link Icon"
    />
  </a>
</template>

<script>
export default {
  name: "ExternalLink",
  props: {
    href: {
      type: String,
      required: true,
    },
  },
};
</script>
