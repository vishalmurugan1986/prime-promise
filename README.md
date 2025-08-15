# Prime Promise

A lightweight **custom Promise** JavaScript implementation for learning internals & syntax flow. 

## Features 
Supports:
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
const { primePromise, promiseWrapper } = require('@vishalmurugan1986/prime-promise');

// Example using primePromise
new primePromise((resolve, reject) => {
    setTimeout(() => resolve("Hello World"), 1000);
})
.then(console.log);
```

## Polyfill

```js
require('@vishalmurugan1986/prime-promise');
// Now global.Promise is primePromise if Promise is missing
```


## License
This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.


