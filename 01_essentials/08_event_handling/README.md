# Event Handling

Vue provides event modifiers for v-on. Recall that modifiers are directive postfixes denoted by a dot.

- .stop -> event.stopPropagation()
- .prevent -> event.preventDefault()
- .capture
- .self
- .once
- .passive

```HTML
<!-- the submit event will no longer reload the page -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form v-on:submit.prevent></form>

<!-- use capture mode when adding the event listener -->
<!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
<div v-on:click.capture="doThis">...</div>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div v-on:click.self="doThat">...</div>

<!-- the click event will be triggered at most once -->
<a v-on:click.once="doThis"></a>
```

obs: Order matters when using modifiers because the relevant code is generated in the same order. Therefore using `v-on:click.prevent.self` will prevent all clicks while `v-on:click.self.prevent` will only prevent clicks on the element itself.

The .passive modifier is especially useful for improving performance on mobile devices.<br>
Learn more about passive modifier: <br>
https://vuejs.org/v2/guide/events.html#Event-Modifiers

### Key Modifiers

 Vue allows adding key modifiers for v-on when listening for key events:

 ```HTML
<!-- only call `vm.submit()` when the `key` is `Enter` -->
<input v-on:keyup.enter="submit">
```

You can directly use any valid key names exposed via [KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) as modifiers by converting them to kebab-case.

https://vuejs.org/v2/guide/events.html#System-Modifier-Keys