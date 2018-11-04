import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
// import classes from '*.module.sass';

//trying some styleing
const styles = theme=> ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

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
                    <input onChange={this.handleInputNumber} name="radName" type="radio" value="1"/><label>1</label>
                        <input onChange={this.handleInputNumber} name="radName" type="radio" value="2"/><label>2</label>
                        <input onChange={this.handleInputNumber} name="radName" type="radio" value="3"/><label>3</label>
                        <input onChange={this.handleInputNumber} name="radName" type="radio" value="4"/><label>4</label>
                        <input onChange={this.handleInputNumber} name="radName" type="radio" value="5"/><label>5</label>
                        <Button type="submit" variant="contained" color="primary">Next</Button>
                    </form>
                  <div> 
                <footer>
                    <Button variant="contained" type="submit" onClick={this.handleAdmin}>Admin</Button>
                        
                </footer>
                </div> 
                
            </div>  
        )
    }
}

const mapStateToProps = (reduxState) => ({reduxState})

export default connect(mapStateToProps)(PageOne);