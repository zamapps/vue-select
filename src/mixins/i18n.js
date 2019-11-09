export const text = {
  spinner: {
    text: 'Loading...'
  },
  noOptions: {
    text: 'Sorry, no matching options.'
  },
  search: {
    ariaLabel: 'Search for options'
  },
  selectedOption: {},
  deselect: {
    ariaLabel: 'Deselect Option'
  }
};

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
      default: text => text,
    },
  },
  computed: {
    i18n () {
      return this.text(text);
    },
  },
};
