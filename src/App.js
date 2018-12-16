import React, { Component } from 'react';

import Search from './Search/Search'
import './App.css';
import { Route } from "react-router-dom";
import ResultChart from './ResultChart/ResultChart';
import { Provider } from 'unstated';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="app">
            <Route exact path="/" component={Search} />
            <Route path="/results/" component={ResultChart} />
        </div>
      </Provider>
    );
  }
}

export default App;
