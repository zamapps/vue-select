Vue Select offers a number of scoped slots that allow you to customize many parts of the
component for your app. You can make small adjustments with slots, or you can swap out all elements
of the default UI for your own. The slot API is the most powerful way to get things looking exactly
the way you want them to.

All the component scoped slots follow a similar pattern. Each slot is scoped with an object with at
least two keys: `bindings` and `events`.

## `bindings {Object}`

Data that is bound to an element within the slot (HTML attributes, classes, etc).

## `events {Object}`

Event handlers for elements within the slot, mapped to an object in the `{event: handler}` format.
These can be conveniently bound to an element (like the search input for example) with
`v-on="events"`. It's usually a good idea to check the slot definition to see if any event handlers
need to be bound to implement functionality.

You can also use the `events` object to modify default behaviour. Bind the specific handlers you want
out of the object, or pass it to a function to add your own behaviour.

## `option` slots

There are many slots that receive an instance of the currently iterated `option` object.

---

### A Note on "Pure Slots"

Similar to a pure function, any variables used within a Vue Select slot template are also bound to
the slot itself. This ensures that slots have everything they require to modify the UI while
retaining all default behaviour.
