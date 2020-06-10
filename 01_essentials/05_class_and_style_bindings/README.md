# Class and Style Bindings

### Binding HTML Classes

- Object Sintax

```js
<div v-bind:class="classObject"></div>
```

```js
data: {
  classObject: {
    active: true,
    'text-danger': false
  }
}
```

obs: This classObject can be a computed propertie, exemple: <br>
```js
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```

- Array Sintax

```js
<div v-bind:class="[{ active: isActive }, errorClass]"></div>
```

```js
data: {
  active: true,
  errorClass: 'text-danger'
}
```

will render: 
```js
<div class="active text-danger"></div>
```

### Binding Inline Styles

The object syntax for `v-bind:style` is pretty straightforward - it looks almost like CSS, except it’s a JavaScript object.

- Object Sintax

```HTML
<div v-bind:style="styleObject"></div>
```

```js
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```

obs: Again, the object syntax is often used in conjunction with computed properties that return objects.

- Array Sintax: allows you to apply multiple style objects

```HTML
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```

- Auto-prefixing: When you use a CSS property that requires [vendor prefixes](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix) in `v-bind:style`, for example `transform`, Vue will automatically detect and add appropriate prefixes to the applied styles.

- Multiple Values (2.3+)

```HTML
<div v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

This will only render the last value in the array which the browser supports. In this example, it will render `display: flex` for browsers that support the unprefixed version of flexbox.
