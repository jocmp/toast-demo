import * as React from 'react';
import Header from './Header';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeContainer from '../containers/home-container';
import { store } from '../store';

const App = () => (
  <Provider store={ store }>
    <Router>
      <div className="app">
        <Header />
        <Route exact path="/" component={ HomeContainer } />
      </div>
    </Router>
  </Provider>
);

export default App;