import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import history from '../../history';

import { FormButton } from '../formfields';
import ReviewProducts from './reviewProducts';


class ReviewForm extends Component {
    render() {
        const { className, handleSubmit, subtotal } = this.props;
        let tax = 1.21;
        return (
            <form onSubmit={handleSubmit} className={`${className} review-form`}>
                <div className='review-form__legend'>
                    <div className='review-form__legend-name'>Name</div>
                    <div className='review-form__legend-quantity'>Quantity</div>
                    <div className='review-form__legend-price'>Price</div>
                </div>
                <ReviewProducts className='review-form__products'/>
                <div className='review-form__line'></div>
                <Field className='review-form__proceed'
                onClick={() => history.push('/information/shipping')}
                type='submit'
                title='Proceed to Checkout'
                name='proceed'
                component={FormButton}/>
                
                <Field className='review-form__back'
                onClick={() => history.push('/shop')}
                type='button'
                title='Back'
                name='back'
                short={true}  // look up  'short' 
                component={FormButton}/>

                <div className='review-form__details review-details'>
                    <div className='review-details__subtotal review-detail'>
                        <div className='review-detail__title'>Subtotal</div>
                        <div className='review-detail__price'>${subtotal}</div>
                    </div>
                    <div className='review-details__tax review-detail'>
                        <div className='review-detail__title'>Tax</div>
                        <div className='review-detail__price'>${tax}</div>
                    </div>
                    <div className='review-details__shipping review-detail'>
                        <div className='review-detail__title'>Shipping</div>
                        <div className='review-detail__price'>$0.00</div>
                    </div>
                    <div className='review-details__total review-detail review-detail-blue'>
                        <div className='review-detail__title'>Total</div>
                        <div className='review-detail__price'>${subtotal + tax}</div>
                    </div>
                </div>

            </form>
        )
    }
}

ReviewForm = reduxForm({  // is redux form the only way to create a form?
    form: 'ReviewForm'
})(ReviewForm);

export default ReviewForm; 