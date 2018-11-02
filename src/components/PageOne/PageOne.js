import React, {Component} from 'react';
//import {withRouter} from 'react-router-dom';



class PageOne extends Component {

handleClick = () => {
    this.props.history.push('/PageTwo')
}

    render() {
        return(
            <div>
                <h1>Page One</h1>
                <button onClick={this.handleClick}>>Next</button>
            </div>  
        )
    }
}

export default PageOne;