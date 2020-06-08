# Template Syntax

### Interpolation

- v-text: Render Text on tag using innerHTML

ex: `v-text="message"`, <br>
`data: {
  message: "Hi"
}`

obs: remove children from the tag with v-text

- v-html: Render HTML content on tag using innerHTML

ex: `v-html="link"`, <br>
`data: {
  link: "<a href='https://www.google.com'>Google</a>"
}`

obs: remove children from the tag with v-html

obs2: Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily  lead to XSS vulnerabilities. Only use HTML interpolation on trusted content and never on user-provided content.

- v-once: Render the content only one time

ex: `v-once`

- Vue.js actually supports the full power of JavaScript expressions inside all data bindings:

`{{ number + 1 }}`

obs: create statement(ex: var x) not word, flow control won't work (ex: if), use ternary expression.

### Directives

- Dinamic Arguments: Use a JavaScript expression in a directive argument

ex: `<a v-bind:[attributename]="url"> ... </a>` <br>
`data: { attributename: "href" }`

obs: don't use uppercase for naming keys, `attributeName` will be convert by `attributename` in inDOM templates.

### Key Modifiers

https://vuejs.org/v2/guide/render-function.html#Event-amp-Key-Modifiers

`@click.prevent="handleClick"` equals `event.preventDefault()` on HandleClick
