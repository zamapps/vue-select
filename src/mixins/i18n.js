import { locale as english } from '../locales/en.js'

/**
 * @this VueSelect
 * @mixin
 */
export default {
  props: {
    locale: {
      type: Function,
      /**
       * @param text {Object}
       * @return {Object}
       */
      default: (text) => text,
    },
  },
  computed: {
    i18n() {
      return this.locale(english)
    },
  },
}
