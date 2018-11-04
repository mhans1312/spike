import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class admin extends Component {

    state = {}

    componentDidMount(){
        this.getFeedback();
    }

    getFeedback =() => {
        axios.get('/feedback')
        .then((response) => {
            console.log('response from GET', response.data)
            this.setState({
                state: response.data
            })
            console.log(this.state)
        })
        .catch((error) => {
            console.log('error from GET', error)
        })
    }    

    render(){
        return(
            <div>
            <h1>Admin</h1>
            <ul>
                {this.props.reduxState.feedbackReducer.map(feedback => (
                    <li key={feedback.id}>
                    {`${feedback.feelings} ${feedback.understanding}
                    ${feedback.support} ${feedback.comments}`}</li>
                ))}
                
            </ul>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({reduxState})

export default connect(mapStateToProps)(admin);