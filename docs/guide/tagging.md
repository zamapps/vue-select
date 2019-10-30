## Taggable Select

To allow input that's not present within the options, set the `taggable` prop to true.

```html
<v-select taggable multiple />
```

<v-select taggable multiple />

#### Hiding the Dropdown Menu

You may want to hide the dropdown when creating taggable selects. This is a nice UX pattern if 
you're *only* going to be adding new options, and have nothing existing to choose from. In this case
the dropdown isn't that helpful, so you can hide it with `no-drop`. 

```html
<v-select taggable multiple no-drop />
```

<v-select taggable multiple no-drop />

#### Keeping Focus While Tagging

By default, Vue Select will lose focus after an option is selected. If you think your users will be
adding multiple tags, you may wish to keep the input focused after a tag has been added.

```html
<v-select taggable multiple no-drop close-on-select="false" />
```

<v-select taggable multiple no-drop close-on-select="false" />

#### Tag with Tab Key

You can also set up the component to select on Tab keydown. If there's no text in the input, the 
browser will tab to the next form input.

```html
<v-select taggable multiple no-drop close-on-select="false" select-on-tab />
```

<v-select taggable multiple no-drop close-on-select="false" select-on-tab />

####  

If you want added tags to be pushed to the options array, set `push-tags` to true.

```html
<v-select taggable multiple push-tags />
```

<v-select taggable multiple push-tags />

## Using `taggable` with `reduce`

When combining `taggable` with `reduce`, you must define the `createOption` prop. The
`createOption` function is responsible for defining the structure of the objects that Vue Select
will create for you when adding a tag. It should return a value that has the same properties as the 
rest of your `options`.

If you don't define `createOption`, Vue Select will construct a simple object following this structure: 
`{[this.label]: searchText}`. If you're using `reduce`, this is probably not what your options look
like, which is why you'll need to set the function yourself.

**Example**

We have a taggable select for adding books to a collection. We're just concerned about getting the
book title added, and our server side code will add the author details in a background process. The
user has already selected a book.  

```js
const options = [
  {
    title: "HTML5",
    author: {
      firstName: "Remy",
      lastName: "Sharp"
    }
  }
];
```

```html
<v-select
  taggable
  multiple
  label="title"
  :options="options"
  :create-option="book => ({ title: book, author: { firstName: '', lastName: '' } })"
  :reduce="book => `${book.author.firstName} ${book.author.lastName}`"
/>
```
