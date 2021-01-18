import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton } from '../formfields';

import history from '../../history';

class PaymentForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} payment-form`}>
                <Field className='payment-form__name'
                type='name'
                title='Name'
                placeholder='Name'
                name='name'
                component={FormInput}/>

                <Field className='payment-form__email'
                type='email'
                title='Email'
                placeholder='Email'
                name='email'
                component={FormInput}/>

                <Field className='payment-form__password'
                type='password'
                title='Password'
                placeholder='Password'
                name='password'
                component={FormInput}/>
                
                <Field className='payment-form__confirm'
                type='password'
                title='Comfirm Password'
                placeholder='Comfirm Password'
                name='comfirm'
                component={FormInput}/>



                <div className='payment-form__line'></div>

                <Field className='payment-form__login'
                onClick={() => history.push('/account'), console.log(history)}
                type='submit'
                title='Create account'
                name='login'
                component={FormButton}/>
                
                <Field className='payment-form__back'
                onClick={() => history.push('/signin')}
                type='button'
                title='Back'
                name='back'
                short={true}
                component={FormButton}/>

            </form>
        )
    }
}

PaymentForm = reduxForm({
    form: 'PaymentForm'
})(PaymentForm);

export default PaymentForm; 