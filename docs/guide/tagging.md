## `taggable`

To allow input that's not present within the options, set the `taggable` prop to true. This will
add the current search text as a selectable option.

<v-select taggable multiple />

```html
<v-select taggable multiple />
```

## `pushTags`

If you want added tags to be pushed to the options array, set `push-tags` to true. This way, if
they are removed from the selection, they remain present in the options list afterwards.

<v-select taggable multiple push-tags />

```html
<v-select taggable multiple push-tags />
```

## createOption

The `createOption` prop accepts a `{function}` callback that receives the tag being selected (the
current search text) as it's first parameter. Whatever you return from this function will be set as
the selected value.

In the example below, added tags will be created with an `isTag: true` flag.

<CreateOption />

<<< @/.vuepress/components/CreateOption.vue

## `taggable` with `reduce`

When combining `taggable` with `reduce`, you must define the `createOption` prop. The
`createOption` function is responsible for defining the structure of the objects that Vue Select
will create for you when adding a tag. It should return a value that has the same properties as the
rest of your `options`.

If you don't define `createOption`, Vue Select will construct a simple object following this structure:
`{[this.label]: searchText}`. If you're using `reduce`, this is probably not what your options look
like, which is why you'll need to set the function yourself.

<CreateOptionReduce />

<<< @/.vuepress/components/CreateOptionReduce.vue{7-8}
