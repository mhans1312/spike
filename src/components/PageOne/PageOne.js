import React, {Component} from 'react';

class PageOne extends Component {

handleClick = () => {
    this.props.history.push('/PageTwo')
}

    render() {
        return(
            <div>
                <h1>How are you feeling today?</h1>
                    <form >
                        <text>I feel horrible</text>
                        <input type="radio" value="1" /><label>1</label>
                        <input type="radio" value="2" /><label>2</label>
                        <input type="radio" value="3" /><label>3</label>
                        <input type="radio" value="4" /><label>4</label>
                        <input type="radio" value="5" /><label>5</label>
                        <text>I feel great!</text>
                    </form>
                <button onClick={this.handleClick}>Next</button>
            </div>  
        )
    }
}

export default PageOne;