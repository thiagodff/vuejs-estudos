# Introduction

### Directives(prefixed with `v-`), inside "" we put JS code:

- v-bind: Bind the atribute with some data property

ex: `v-bind:title="message"` or `:title="message"`

- v-if: Show tag based on one data property

ex: `v-if="showElement"`

`v-else` only works strict after v-if

`v-if`: remove element
`v-show`: put a display: none

- v-for: Displaying a list of items using the data(array(value, index) or object(value, key, index))

ex: `v-for="todo in todos"`

`:key="value.id"`: Unique identity for each rendered element

- v-on: Attach event listeners that invoke methods

ex: `v-on:click="reverseImage"` or `@click="reverseImage"`

- v-model: Makes two-way binding between form input and app state a breeze

ex: `v-model="message"`

- v-html: Render HTML content on tag using innerHTML

ex: `v-html="link"`, <br>
`data: {
  link: "<a href='https://www.google.com'>Google</a>"
}`

obs: remove children from the tag with v-html

- v-text: Render Text on tag using innerHTML

ex: `v-text="message"`, <br>
`data: {
  message: "Hi"
}`

obs: remove children from the tag with v-text

- v-once: Render the content only one time

ex: `v-once`

### Key Modifiers

https://vuejs.org/v2/guide/render-function.html#Event-amp-Key-Modifiers

`@click.prevent="handleClick"` equals `event.preventDefault()` on HandleClick

### Events

ex: `@mousemove="handleMove"`, `@mouseenter`, `@change`, `@keyup`

### Tag <template>

`<template>children</template>` is a tag that Vue provides to group content, but does not appear in HTML
