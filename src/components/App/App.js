import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';


//setting up class
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Router>
        <div>
          <Route exact path="/" component={PageOne} />
          <Route path="/PageTwo" component={PageTwo} />
        </div>
        </Router>
        <br/>
      </div>
    );
  }
}

export default App;
