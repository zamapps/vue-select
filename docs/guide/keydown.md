### Customizing Keydown Behaviour
---

Vue Select provides the `map-keydown` Function prop to allow for customizing the components response to 
keydown events while the input has focus. Here's the default function definition:

```js
/**
 * @param map {Object} Mapped keyCode to handlers { <keyCode>: <callback> }
 * @param vm {Vue/Component} Vue Select instance
 * @return {Object}
 */
(map, vm) => map,
```

By default, the prop is a no–op returning the same object `map` object it receives. This object
maps keyCodes to handlers: `{ <keyCode>: <callback> }`. Modifying this object can override default
functionality, or add handlers for different keys that the component doesn't normally listen for.

### Example: Tag on `comma` and `space`

If I have a taggable input, and I want `comma` or `space` to 'tag' the current option, you could 
solve that with map-keydown. Since the tab button already creates tags, we can copy the handler
for keyCode 9.

```vue
<template>
  <v-select taggable multiple no-drop :map-keydown="handlers"/>
</template>

<script>
export default {
  methods: {
    handlers (map, vm) {
      const createTag = e => {
        e.preventDefault();
        vm.typeAheadSelect();
        vm.searchEl.focus();
      };

      return {
        ...map, //  defaults
        32: createTag,  //  space
        188: createTag,  //  comma
      };
    },
  },
};
</script>
```

<custom-handlers></custom-handlers>
