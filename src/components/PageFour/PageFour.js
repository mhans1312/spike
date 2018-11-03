import React, {Component} from 'react';

class PageFour extends Component {

    handleInputComment = (event) => {
        this.setState({
            ...this.state,
            comment: event.target.value 
        });
        console.log('clicked number is: ', event.target.comment);
    }
    
    handleClick = () => {
        this.props.history.push('PageFive')
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

export default PageFour;