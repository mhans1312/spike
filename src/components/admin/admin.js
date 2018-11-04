import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class admin extends Component {

    state = {
        feedback: [],
    }

    componentDidMount(){
        this.getFeedback();
    }

    getFeedback =() => {
        axios.get('/feedback')
        .then((response) => {
            console.log('response from GET', response.data)
            this.setState({
                feedback: response.data
            })
            console.log(this.state)
        })
        .catch((error) => {
            console.log('error from GET', error)
        })
    }   
    
    deleteFeedback = (id) => {
        axios({
            method: 'DELETE',
            url: `/feedback/${id}`
        })
        .then((response) => {
            this.getFeedback();
        })
        .catch((error) => {
            console.log('error on DELETE', error)
        })
    }

    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Feelings</th><th>Understanding</th><th>Support</th><th>Comments</th><th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.feedback.map( feedback =>
                                <tr key={feedback.id}>
                                    <td>{feedback.feeling}</td>
                                    <td>{feedback.understanding}</td>
                                    <td>{feedback.support}</td>
                                    <td>{feedback.comments}</td>
                                    <button onClick={()=>{
                                        this.deleteFeedback(feedback.id)
                                    }}>Delete</button>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({reduxState})

export default connect(mapStateToProps)(admin);