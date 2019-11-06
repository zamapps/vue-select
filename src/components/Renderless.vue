<script>
import Select from './Select';

export default {
  ...Select,
  computed: {
    ...Select.computed,
    searchEl() {
      return this.$root.$el.querySelector('input[type=search]');
    }
  },
  render () {
    const scope = {};

    for (const property in {
      ...Select.computed,
      ...Select.methods,
      ...Select.props,
      ...this.$data,
    }) {
      scope[property] = this[property];
    }

    return this.$scopedSlots.default(scope);
  },
};
</script>
