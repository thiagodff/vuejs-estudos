# Conditional Rendering

### Controlling Reusable Elements with key

If you toggle a input, Vue may lose reference, so use a key attribute to fix it

good example:
```html
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```

### v-show

Put a `display: none` on tag element
```html
<h1 v-show="ok">Hello!</h1>
```

Note that `v-show` doesn’t support the `<template> `element, nor does it work with v-else.

### Diferences between `v-if` and `v-show`:

`v-if` is “real” conditional rendering because it ensures that event listeners and child components inside the conditional block are properly destroyed and re-created during toggles.

`v-if` is also lazy: if the condition is false on initial render, it will not do anything - the conditional block won’t be rendered until the condition becomes true for the first time.

Generally speaking, `v-if` has higher toggle costs while `v-show` has higher initial render costs.

### `v-if` with `v-for`

Using `v-if` and `v-for` together is not recommended. When used together with `v-if`, `v-for` has a higher priority than `v-if`.

https://vuejs.org/v2/style-guide/#Avoid-v-if-with-v-for-essential

https://vuejs.org/v2/guide/list.html#v-for-with-v-if