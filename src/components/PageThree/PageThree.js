import React, {Component} from 'react';

class PageThree extends Component {

    handleClick = () => {
        this.props.history.push('PageFour')
    }

    render() {
        return(
            <div>
                <h1>Page Three</h1>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default PageThree;