import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton } from '../formfields';

import OrderSummary from './orderSummary';
import { UnderlinedTitle } from './infoHelp';

import { connect } from 'react-redux';


import history from '../../history';

class PaymentForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} payment-form`}>
                <Field className='payment-form__name'
                type='name'
                title='Name on Credit Card'
                placeholder='Name'
                name='name'
                component={FormInput}/>

                <Field className='payment-form__card'
                type='card'
                title='Credit Card Number'
                placeholder='____-____-____-____'
                name='card'
                component={FormInput}/>

                <Field className='payment-form__expiration'
                type='expiration'
                title='Expiration Date'
                placeholder='expiration'
                name='expiration'
                component={FormInput}/>
                
                <Field className='payment-form__ccv'
                type='ccv'
                title='CCV'
                placeholder='CCV'
                name='ccv'
                component={FormInput}/>



                <div className='payment-form__line'></div>

                <Field className='payment-form__pay-complete'
                onClick={() => history.push('/account'), console.log(history)}
                type='submit'
                title='Complete Payment'
                name='Complete Payment'
                component={FormButton}/>
                
                <Field className='payment-form__back'
                onClick={() => history.push('/information/shipping')}
                type='button'
                title='Back'
                name='back'
                short={true}
                component={FormButton}/>

                <OrderSummary className='payment-form__order-summary' />

                <div className='payment-form__shipping-info shipping-info'>
                    <UnderlinedTitle className='shipping-info__title' title='Shipping To' />
                    <div className='shipping-info__name small-text'>{this.props.name}</div>
                    <div className='shipping-info__address small-text'>{this.props.address}</div>
                </div>


            </form>
        )
    }
}

PaymentForm = reduxForm({
    form: 'PaymentForm'
})(PaymentForm);

function mapSateToProps(state) {
    const { name, address } = state.user.user;
    return { name, address }
}

PaymentForm = connect(mapSateToProps)(PaymentForm);

export default PaymentForm; 