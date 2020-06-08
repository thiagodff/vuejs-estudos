# Vue Instance

### Data and Methods

Vue instances expose a number of useful instance properties and methods. These are prefixed with $ to differentiate them from user-defined properties.

https://vuejs.org/v2/api/#Instance-Properties

### Instance Lifecycle Hooks

Hooks: created, mounted, updated, and destroyed.

Don’t use arrow functions on an options property or callback, such as created:
`() => console.log(this.a)` or `vm.$watch('a', newValue => this.myMethod())`.<br>
Since an arrow function doesn’t have a `this`, `this` will be treated as any other variable and lexically looked up through parent scopes until found.

<img src="https://vuejs.org/images/lifecycle.png" alt="vue lifecrycle diagram" style="width: 600px">
