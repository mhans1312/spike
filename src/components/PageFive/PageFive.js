import React, {Component} from 'react';
import {connect} from 'react-redux';

class PageFive extends Component {

    //send user back to first page
    handleClick = () => {
        this.props.history.push('')
    }

    render() {
        return(
            <div>
                <h1>Thank You!</h1>
                <button onClick={this.handleClick}>Leave New Feedback</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({reduxState})

export default connect(mapStateToProps)(PageFive);