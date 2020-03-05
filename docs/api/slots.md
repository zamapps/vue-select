## selected-option

```vue
<slot name="selected-option" v-for="selected in scopedValues" v-bind="selected">
  <span :class="selected.bindings.class">
    {{ selected.label }}
    <component
    ref="deselectButtons"
    :is="selected.deselect.component"
    v-if="selected.deselect.bindings.multiple"
    v-bind="selected.deselect.bindings"
    v-on="selected.deselect.events"
    />
  </span>
</slot>
```

## search

```vue
<slot name="search" v-bind="scope.search">
  <input v-bind="scope.search.attributes" v-on="scope.search.events">
</slot>
```

## clear

```vue
<slot name="clear">
  <component
    ref="clearButton"
    :is="scope.clear.component"
    v-bind="scope.clear.bindings"
    v-on="scope.clear.events"
  />
</slot>
```

## open-indicator

```vue
<slot name="open-indicator" v-bind="scope.openIndicator">
  <component
    v-if="scope.openIndicator.shouldDisplay"
    :is="scope.openIndicator.component"
    v-bind="scope.openIndicator.attributes"
  />
</slot>
```

## spinner

```vue
<slot name="spinner" v-bind="scope.spinner">
  <div :class="scope.spinner.bindings.class" v-show="mutableLoading">Loading...</div>
</slot>
```

## option

```vue
<slot name="option" v-for="option in scopedOptions" v-bind="option">
  <li v-bind="option.attributes" v-on="option.events">{{ option.label }}</li>
</slot>
```

## no-options

```vue
<slot name="no-options">Sorry, no matching options.</slot>
```
