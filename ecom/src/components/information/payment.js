import React, { Component } from 'react';

import PageTitle from '../pagetitle';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import PaymentForm from './PaymentForm';

class Payment extends Component {
    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        console.log(fields);
    }
    
    render() {
        return (
            <div className='sign-in'>
                <PageTitle className='sign-in__page-title' title='Payment Information' />
                <PaymentForm onSubmit={this.onSubmit} className='sing-in__form' />
            </div>
        )
    }
}

Payment = connect(null, actions)(Payment);

export default Payment;