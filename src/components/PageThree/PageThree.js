import React, {Component} from 'react';
import {connect} from 'react-redux';

class PageThree extends Component {

    state = {
        newFeedback: ''
    }

    handleInputNumber = (event) => {
        this.setState({
            ...this.state,
            newFeedback: event.target.value 
        });
        console.log('clicked number is: ', event.target.value);
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log(this.state.newFeedback)
        this.props.dispatch({type: 'SET_SUPPORT', payload: this.state});
        this.props.history.push('PageFour')
    }

    render() {
        return(
            <div>
                <h1>How well are you being supported?</h1>
                <form onSubmit={this.handleClick}>
                        <input onChange={this.handleInputNumber} type="radio" value="1"/><label>1</label>
                        <input onChange={this.handleInputNumber} type="radio" value="2"/><label>2</label>
                        <input onChange={this.handleInputNumber} type="radio" value="3"/><label>3</label>
                        <input onChange={this.handleInputNumber} type="radio" value="4"/><label>4</label>
                        <input onChange={this.handleInputNumber} type="radio" value="5"/><label>5</label>
                        <button type="submit">Next</button>
                    </form>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({reduxState})

export default connect(mapStateToProps)(PageThree);