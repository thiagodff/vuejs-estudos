# List Rendering

### Replacing an Array

Replace an array is not a problem. Vue implements some smart heuristics to maximize DOM element reuse.

```js
items = items.filter(function (item) {
  return item.message.match(/Foo/)
})
```

obs: Due to limitations in JavaScript, there are types of changes that Vue cannot detect with arrays and objects. These are discussed in the [reactivity](https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats) section.


### Displaying Filtered/Sorted Results

Sometimes we want to display a filtered or sorted version of an array without actually mutating or resetting the original data. In this case, you can create a computed property that returns the filtered or sorted array.

```html
<li v-for="n in evenNumbers">{{ n }}</li>
```

```js
data: {
  sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
},
methods: {
  even: function (numbers) {
    return numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
```

You can display `v-for` in a `<template>` tag. `v-for` can also take an integer

```HTML
<ul>
  <template v-for="n in 10">
    <li>{{ n }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

Note that it’s not recommended to use `v-if` and `v-for` together

When using `v-for` with a component, a key is now required.

In order to pass the iterated data into the component, we should also use props:

```js
<my-component
  v-for="(item, index) in items"
  v-bind:item="item"
  v-bind:index="index"
  v-bind:key="item.id"
></my-component>
```
