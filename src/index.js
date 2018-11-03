import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

//feedbackReducer collects feedback(number rank 1-5 and comment)
//Puts this info into state
const feedbackReducer = (state = [], action) => {
    console.log('in reducer');
    if(action.type === 'SET_ELEMENTS') {
        return action.payload
    }
    return state;
}


//Create store
const reduxStore = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
