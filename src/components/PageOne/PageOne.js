import React, {Component} from 'react';

class PageOne extends Component {

    handleInputNumber = (event) => {
        this.setState({
            ...this.state,
            rankNumber: event.target.value 
        });
        console.log('clicked number is: ', event.target.value);
    }

    handleClick = () => {
    this.props.history.push('/PageTwo')
}

    render() {
        return(
            <div>
                <h1>How are you feeling today?</h1>
                    <form >
                        <text>I feel horrible</text>
                        <input onChange={this.handleInputNumber} type="radio" value="1" /><label>1</label>
                        <input onChange={this.handleInputNumber} type="radio" value="2" /><label>2</label>
                        <input onChange={this.handleInputNumber} type="radio" value="3" /><label>3</label>
                        <input onChange={this.handleInputNumber} type="radio" value="4" /><label>4</label>
                        <input onChange={this.handleInputNumber} type="radio" value="5" /><label>5</label>
                        <text>I feel great!</text>
                    </form>
                <button onClick={this.handleClick}>Next</button>
            </div>  
        )
    }
}

export default PageOne;