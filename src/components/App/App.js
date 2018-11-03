import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
import PageThree from '../PageThree/PageThree';
import PageFour from '../PageFour/PageFour';
import PageFive from '../PageFive/PageFive';


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
          <Route path="/PageThree" component={PageThree} />
          <Route path="/PageFour" component={PageFour} />
          <Route path="/PageFive" component={PageFive} />
        </div>
        </Router>
        <br/>
      </div>
    );
  }
}

export default App;
