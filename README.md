<p align="center">
  <a href="https://github.com/vishalmurugan1986/prime-promise/stargazers">
    <img src="https://img.shields.io/github/stars/vishalmurugan1986/prime-promise?color=yellow&style=for-the-badge" alt="Stars">
  </a>
  <a href="https://github.com/vishalmurugan1986/prime-promise/issues">
    <img src="https://img.shields.io/github/issues/vishalmurugan1986/prime-promise?color=brightgreen&style=for-the-badge" alt="Issues">
  </a>
  <a href="https://github.com/vishalmurugan1986/prime-promise/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/vishalmurugan1986/prime-promise?color=blue&style=for-the-badge" alt="License">
  </a>
</p>


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


