import React, {Component} from 'react';

class PageTwo extends Component {

    handleClick = () => {
        this.props.history.push('/PageThree')
    }

    render() {
        return(
            <div>
                <h1>How well are you understanding the content?</h1>
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

export default PageTwo;