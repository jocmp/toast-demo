import * as React from 'react';
import Header from './Header';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeContainer from '../containers/HomeContainer'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

store.subscribe(() => console.log(store.getState()))

const App = () => (
  <Provider store={ store }>
    <Router>
      <div class="app">
        <Header />
        <Route exact path="/" component={ HomeContainer } />
      </div>
    </Router>
  </Provider>
);

export default App;