import React, {Component} from 'react';

class PageFour extends Component {

    handleClick = () => {
        this.props.history.push('PageFive')
    }

    render() {
        return(
            <div>
                <h1>Page Four</h1>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default PageFour;