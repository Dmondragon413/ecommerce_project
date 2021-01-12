import React, { Component } from 'react';
import Quantity from '../quantity';
import BluePriceTag from '../bluePriceTag';

class CartProduct extends Component {
    render() {
        const { className, product, quantity } = this.props;
        const { title, price } = product;
        return (
            <div className={`${className} cart-product`}>
                <img className='cart-product__image' src='http://via.placeholder.com/130/130'/>
                <div className='cart-product__title'>{title}</div>
                <Quantity className='cart-product__quantity' quantity={quantity}/>
                <a className='cart-product__remove'>Remove</a>
                <BluePriceTag className='cart-product__price' title={price}/>
            </div>
        )
    }
}

export default CartProduct;