import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class PageFour extends Component {

    state = {
        comments: ''
    }

      //posting the feedback
  postFeedback = () => {
      console.log('about to POST', this.props.reduxState.feedbackReducer);
    axios({
      method: 'POST',
      url: '/feedback',
      data: this.props.reduxState.feedbackReducer
    })
    .then((response) => {
      console.log('response from POST', response);
    })
  }

    //assigning a value to the comments in order to send it to reducer
    handleInputComment = (event) => {
        this.setState({
            ...this.state,
            comments: event.target.value 
        });
        console.log('clicked number is: ', event.target.comments);
    }
    
    //sending comment to the reducer and navigating to next page
    handleClick = () => {
        // event.preventDefault();
        console.log(this.state.comments)
        this.props.dispatch({type: 'SET_COMMENT', payload: this.state});
        console.log('what we have before postFeedback', this.state);
        this.postFeedback();
        this.props.history.push('PageFive')
    }


    //making all the magic happen on the dom
    render() {
        return(
            <div>
                <h1>Any comments you want to leave?</h1>
                    <form>
                        <textarea onChange={this.handleInputComment} name="comments" form="usrform" placeholder="Enter comments here..."></textarea>
                    </form>
                <Button variant="contained" color="primary" onClick={() => {if (window.confirm('Are you sure you want to submit this feedback?'))this.handleClick()}}>Submit</Button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({reduxState})

export default connect(mapStateToProps)(PageFour);