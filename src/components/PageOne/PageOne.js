import React, {Component} from 'react';
import {connect} from 'react-redux';

class PageOne extends Component {

    state = {
        pageOneFeedback: ''
    }
    //sending feedback to reducer


    //getting the clicked number into state
    handleInputNumber = (event) => {
        this.setState({
            ...this.state,
            pageOneFeedback: event.target.value 
        });
        console.log('clicked number is: ', event.target.value);
    }

    //getting input number into state and going to next page
    handleClick = (event) => {
        event.preventDefault();
        console.log(this.state.pageOneFeedback)
        this.props.dispatch({type: 'SET_FEELING', payload: this.state});
        this.props.history.push('/PageTwo')
    }

    render() {
        return(
            <div>
                <h1>How are you feeling today?</h1>
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

export default connect(mapStateToProps)(PageOne);