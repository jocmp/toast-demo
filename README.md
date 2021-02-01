# React-Redux Toast Demo

## Getting started

1. The version of node in `.nvmrc` will ensure the greatest compatibility with this application - [nvm](https://github.com/nvm-sh/nvm) can be used to install specific node versions locally (i.e. `nvm install v8.1.4`)
2. From the command line, run `yarn` in the root directory for dependencies
3. Run `yarn start` to open a dev server which displays on <http://localhost:8080>
4. A compiled version of this application can be generated using `yarn build` (with the `build` directory containing the resultant)

`yarn test` will run snapshot tests.

## Explanation

There are several React-Redux components that are important to this demo:

* [Toast] component which is the baseline component
* [Toasts] component which maps multiple toasts to a parent component
* [Toast Container] that maps Redux state to React
* [Reducer]
* [Action Creator]

[Toast]: https://github.com/josiahcampbell/toast-demo/blob/master/src/components/Toast.tsx
[Toasts]: https://github.com/josiahcampbell/toast-demo/blob/master/src/components/Toasts.tsx
[Toast Container]: https://github.com/josiahcampbell/toast-demo/blob/master/src/containers/toasts-container.ts
[Reducer]: https://github.com/josiahcampbell/toast-demo/blob/master/src/reducers/index.ts
[Action Creator]: https://github.com/josiahcampbell/toast-demo/blob/master/src/actions/index.ts
