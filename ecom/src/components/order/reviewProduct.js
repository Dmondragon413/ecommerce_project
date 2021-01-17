import React, { Component } from 'react';

class ReviewProduct extends Component {
    render() {
        const { product, quantity } = this.props;
        const { imageUrl, title, price } = product
        return(
            <div className='review-product'>
                <img className='review-product__image' src={imageUrl}/>
                <div className='review-product__title'>{title}</div>
                <div className='review-product__quantity'>{quantity}</div>
                <div className='review-product__price'>${price * quantity}</div>
            </div>
        )
    }
}

export default ReviewProduct;