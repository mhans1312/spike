import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';

class PageFive extends Component {

    //send user back to first page
    handleClick = () => {
        this.props.history.push('')
    }

    render() {
        return(
            <div>
                <h1>Feedback Submitted! Thank You!</h1>
                <Button varient="contained" onClick={this.handleClick}>Leave New Feedback</Button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({reduxState})

export default connect(mapStateToProps)(PageFive);