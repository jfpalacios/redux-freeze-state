### Installation

Use freezeState with your reducer to find spots in your app where you are mutating state. It is not recommended to use this in production as it recursively freezes objects and could affect performance.

```js
npm install redux-freeze-state --save-dev
```

```js
import { createStore } from 'redux';
import freezeState from 'redux-freeze-state';

let reducer = ...
let store = createStore(freezeState(reducer));
```

Or apply it selectively:

```js
var reducer = combineReducers({
  todos: freezeState(todos),
  emails: emails,
  files: freezeState(files)
});
```

Modifying store state will result in an error:

```
Unhandled promise rejection TypeError: Can't add property test, object is not extensible(…)
```