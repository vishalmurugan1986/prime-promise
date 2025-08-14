# Prime Promise

A lightweight **custom Promise implementation** for learning JavaScript internals & async flow — supports:
- `.then()`
- `.catch()`
- `.finally()`
- `Promise.all()`
- Polyfill mode
- Callback wrapper utility

## Installation
```bash
npm install @vishalmurugan1986/prime-promise
```

## Usage
```js
const { PrimePromise, promiseWrapper } = require('@vishalmurugan1986/prime-promise');

new PrimePromise((resolve, reject) => {
    setTimeout(() => resolve("Hello World"), 1000);
}).then(console.log);
```

## Polyfill
```js
require('@vishalmurugan1986/prime-promise');
// Now global.Promise is PrimePromise if Promise is missing
```

## License
MIT
