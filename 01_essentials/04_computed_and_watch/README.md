# Computed Properties and Watchers

### Computed vs Method

For the end result, the two approaches are indeed exactly the same.

`<p>Reversed message: "{{ reverseMessage() }}"</p> // method` <br>
`<p>Reversed message: "{{ reverseMessage }}"</p> // computed`

The diference is that computed properties are cached based on their reactive dependencies. A computed property will only re-evaluate when some of its reactive dependencies have changed.

obs: Date.now() is not a reactive dependency.<br>
obs2: In cases where you do not want caching, use a method instead.

# Watchers

Vue provides a more generic way to react to data changes through the `watch` option. This is most useful when you want to perform asynchronous or expensive operations in response to changing data.

`watch` option allows us to perform an asynchronous operation (accessing an API).

https://vuejs.org/v2/api/#vm-watch