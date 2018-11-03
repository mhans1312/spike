import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class PageFour extends Component {

    state = {
        comments: ''
    }

      //posting the feedback
  postFeedback = () => {
      console.log('about to POST', this.props.reduxState.feedbackReducer);
    axios.post({
      method: 'POST',
      url: '/api/feedback',
      data: this.props.reduxState.feedbackReducer
    })
    .then((response) => {
      console.log('response from POST', response);
    })
  }

    handleInputComment = (event) => {
        this.setState({
            ...this.state,
            comments: event.target.value 
        });
        console.log('clicked number is: ', event.target.comments);
    }
    
    handleClick = (event) => {
        event.preventDefault();
        console.log(this.state.comments)
        this.props.dispatch({type: 'SET_COMMENT', payload: this.state});
        console.log('what we have before postFeedback', this.state);
        this.postFeedback();
        //this.props.history.push('PageFour')
    }



    render() {
        return(
            <div>
                <h1>Any comments you want to leave?</h1>
                    <form>
                        <textarea onChange={this.handleInputComment} name="comment" form="usrform" placeholder="Enter comments here..."></textarea>
                    </form>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({reduxState})

export default connect(mapStateToProps)(PageFour);