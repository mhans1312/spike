import React, {Component} from 'react';

class PageThree extends Component {

    handleClick = () => {
        this.props.history.push('PageFour')
    }

    render() {
        return(
            <div>
                <h1>How well are you being supported?</h1>
                    <form>
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                    </form>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default PageThree;