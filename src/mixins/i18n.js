const deselectLabel = (label) => `Deselect ${label}`

export const text = {
  spinner: {
    text: 'Loading...',
  },
  noOptions: {
    text: 'Sorry, no matching options.',
  },
  search: {
    ariaLabel: 'Search for options',
  },
  selectedOption: {},
  deselectButton: {
    ariaLabel: deselectLabel,
    title: deselectLabel,
  },
  clearButton: {
    ariaLabel: 'Clear Selection',
    title: 'Clear Selection',
  },
}

/**
 * @this VueSelect
 * @mixin
 */
export default {
  props: {
    text: {
      type: Function,
      /**
       * @param text {Object}
       * @return {*}
       */
      default: (text) => text,
    },
  },
  computed: {
    i18n() {
      return this.text(text)
    },
  },
}
