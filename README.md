<h1 align="center" style="border-bottom: none;">@csvenke/pipe</h1>
<h3 align="center">Pipe implementation with (almost) variadic kinds</h3>
<!--p align="center">
  <a href="https://www.npmjs.com/package/@csvenke/pipe">
    <img src="https://badgen.net/npm/v/@csvenke/pipe" alt="npm package" />
  </a>
  <a href="https://bundlephobia.com/result?p=@csvenke/pipe">
    <img src="https://badgen.net/bundlephobia/min/@csvenke/pipe" alt="min bundle size" />
  </a>
  <a href="https://github.com/csvenke/pipe/actions?query=workflow%3Amaster">
    <img src="https://github.com/csvenke/pipe/workflows/master/badge.svg" alt="master workflow" />
  </a>
  <a href="https://github.com/csvenke/pipe/actions?query=workflow%3A%22pull+request%22">
    <img src="https://github.com/csvenke/pipe/workflows/pull%20request/badge.svg" alt="pull request workflow" />
  </a>
  <a href="https://github.com/semantic-release/semantic-release">
    <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="semantic release" />
  </a>
</p-->

<p align="center">
  <a href="#install">Install</a> •
  <a href="#usage">Usage</a> •
  <a href="#development">Development</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

## Install

Using npm

```
npm install --save @csvenke/pipe
```

Using yarn

```
yarn add @csvenke/pipe
```

## Usage

With javascript

```js
import pipe from "@csvenke/pipe";

const getName = data => data.name;

const toUpperCase = str => str.toUpperCase();

const reverse = str => str.split("").reverse().join("");

const piped = pipe(getName, toUpperCase, reverse);

console.log(piped({ name: "John" })); // NHOJ
```

With typescript

```ts
import pipe from "@csvenke/pipe";

interface Data {
  name: string;
}

const getName = (data: Data) => data.name;

const toUpperCase = (str: string) => str.toUpperCase();

const reverse = (str: string) => str.split("").reverse().join("");

const piped = pipe(getName, toUpperCase, reverse);

console.log(piped({ name: "John" })); // NHOJ
```

## Development

Installing dependencies

```
yarn install
```

Running tests

```
yarn test
```

## Credits

- This wouldn't have been possible without [jcalz](https://stackoverflow.com/questions/53173203/typescript-recursive-function-composition) amazing stack overflow answer!

## License

MIT
