### Customizing Keydown Behaviour
---

## `selectOnKeyCodes`



## `mapKeyDown`

Vue Select provides the `map-keydown` Function prop to allow for customizing the components response to 
keydown events while the search input has focus.

```js
/**
 * @param map {Object} Mapped keyCode to handlers { <keyCode>:<callback> }
 * @param vm {VueSelect}
 * @return {Object}
 */
(map, vm) => map,
```

By default, the prop is a no–op returning the same object `map` object it receives. This object
maps keyCodes to handlers: `{ <keyCode>: <callback> }`. Modifying this object can override default
functionality, or add handlers for different keys that the component doesn't normally listen for.

**Default Handlers**

```js
//  delete
8: e => this.maybeDeleteValue()

//  tab
9: e => this.onTab()

//  enter
13: e => {
    e.preventDefault();
    return this.typeAheadSelect();
}

//  esc
27: e => this.onEscape()

//  up
38: e => {
    e.preventDefault();
    return this.typeAheadUp();
}

//  down
40: e => {
    e.preventDefault();
    return this.typeAheadDown();
}
```

### Example: Autocomplete Email Addresses

This is example listens for the `@` key, and autocompletes an email address with `@gmail.com`.

<<< @/.vuepress/components/CustomHandlers.vue

<custom-handlers></custom-handlers>
