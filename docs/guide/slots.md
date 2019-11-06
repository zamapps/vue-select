## Scoped Slots

Vue Select offers a number of scoped slots that allow you to customize many parts of the 
component for your app. You can make small adjustments with slots, or you can swap out all elements 
of the default UI for your own.

All of Vue Selects scoped slots follow a similar pattern. Each slot is scoped with an object with at
least two keys: `bindings` and `events`. 

`bindings {Object}` Data that is bound to an element within the slot (HTML attributes, classes, etc)
`events {Object}` Event handlers for elements within the slot
    

