import React, { Component } from 'react';
import SignInForm from './signinform';
import PageTitle from '../pagetitle';

import { connect } from 'react-redux';
import * as actions from '../../actions'; // IS THIS IMPORTING ALL FILES THAT EXIST IN THE ACIONS FOLDER??

class SignIn extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        console.log(fields)  // IT IS NOT CONSOLOE LOGGIN FIELDS, SAYS 'form submission canceled because the form is not connected'???
    }


    render() {
        return (
            <div className='sign-in'>
                <PageTitle className='sign-in__page-title' title='Login'/>
                <SignInForm onSubmit={this.onSubmit} className='sign-in__form' />
            </div>
        )
    }
}

SignIn = connect(null, actions) (SignIn);

export default SignIn;