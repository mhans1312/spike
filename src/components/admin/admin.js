import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class admin extends Component {
    render(){
        return(
            <div>
            <h1>Admin</h1>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({reduxState})

export default connect(mapStateToProps)(admin);