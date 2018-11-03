import React, {Component} from 'react';

class PageOne extends Component {

handleClick = () => {
    this.props.history.push('/PageTwo')
}

    render() {
        return(
            <div>
                <h1>How are you feeling today?</h1>
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

export default PageOne;