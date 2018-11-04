import React, {Component} from 'react';
import {connect} from 'react-redux';

class PageOne extends Component {

    //setting state
    state = {
        feeling: ''
    }

    //giving the clicked number a value in order to send to reducer
    handleInputNumber = (event) => {
        this.setState({
            ...this.state,
            feeling: event.target.value 
        });
        console.log('clicked number is: ', event.target.value);
    }

    //getting input number and sending it to the reducer then going to next page
    handleClick = (event) => {
        event.preventDefault();
        console.log(this.state.feeling)
        this.props.dispatch({type: 'SET_FEELING', payload: this.state});
        this.props.history.push('/PageTwo')
    }

    //setting up the admin button to navigate to admin page
    handleAdmin = (event) => {
        console.log('clicked on admin')
        event.preventDefault();
        this.props.history.push('/admin')
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
                <footer>
                    <form onSubmit={this.handleAdmin}>
                        <button type="submit">Admin</button>
                    </form>
                </footer>
            </div>  
        )
    }
}

const mapStateToProps = (reduxState) => ({reduxState})

export default connect(mapStateToProps)(PageOne);