import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
import PageThree from '../PageThree/PageThree';
import PageFour from '../PageFour/PageFour';
import PageFive from '../PageFive/PageFive';
import admin from '../admin/admin';

//setting up class
class App extends Component {

  //using Router and Route to navigate the app
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
          <Route path="/admin" component={admin} />
        </div>
        </Router>
        <br/>
      </div>
    );
  }
}

//obligatory copy and paste just to be sure
const mapStateToProps = reduxState => ({reduxState});

export default connect(mapStateToProps)(App);
