import React, {Component} from 'react';
import {connect} from 'react-redux';

class PageFour extends Component {

    state = {
        comment: ''
    }

    handleInputComment = (event) => {
        this.setState({
            ...this.state,
            comment: event.target.value 
        });
        console.log('clicked number is: ', event.target.comment);
    }
    
    handleClick = (event) => {
        event.preventDefault();
        console.log(this.state.comment)
        this.props.dispatch({type: 'SET_COMMENT', payload: this.state});
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