import React, { Component } from 'react';

import PageTitle from '../pagetitle';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import ShippingForm from './shippingForm';

class Shipping extends Component {
    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        console.log(fields);
        this.props.history.push('/information/payment')
    }
    
    render() {
        return (
            <div className='shipping'>
                <PageTitle className='shipping__page-title' title='Shipping Address' />
                <ShippingForm onSubmit={this.onSubmit} className='shipping__form' />
            </div>
        )
    }
}

Shipping = connect(null, actions)(Shipping);

export default Shipping;