import React, { Component } from 'react';

import * as actions from '../../actions';
import { connect } from 'react-redux';
import ShopSearchBar from './shopSearchbar';
import ShopProduct from './shopProduct';
import ShopCart from './shopCart';
import CartButton from './cartButton';

class Shop extends Component {

    constructor() {
        super();

        this.state = {
            showCart: true
        }
    }
    
    componentDidMount() {

        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: '/signin'
            },
            
        ]

        this.props.setHeaderLinks(headerLinks);             // Soo by importing ALL actions, that is how we are able to call upon all these functions??
        this.props.fetchShopCategories();
        this.props.fetchShopProducts();
        // set the header links
        // fetch shop products action creator
        // fetch navbar links
            // set the navbar links
            // filter products with links
    }
    // updated props being passed in
    shouldComponentUpdate(nextProps) { 
        // if the new props that are coming in (after some update)  and they are the SAME then they are                      // does react know that this is going to be looking into next props? how does that work ??
        if(this.props != nextProps) {                        // so if props doesn't equal to nextprops then the selected id is placed within ??
            this.props.setNavbarLinks(nextProps.categories, (_id) => this.props.filterProductsWithCategoryId(_id));
        }
        return true                             // why return true?? what isf currently false ??
    }
ju
    onSubmit = (fields) => {
        console.log(fields)
        this.props.filterProductsWithQuery(fields)
    }

    handleAddToCart = () => {
        if(document.getElementById('shop-cart').classList.contains('cart-hidden')) {
            document.getElementById('shop-cart').classList.remove('cart-hidden');
        } else {
            document.getElementById('shop-cart').classList.add('cart-hidden');
        }
    }

    render() {

        // return <ShopCart className='shop__cart'/>

        return(
            <div className='shop'>

                <ShopSearchBar onSubmit={this.onSubmit} className='shop__search-bar' />

                <div className='shop__products'>
                    {
                        this.props.filteredProducts.map(product => {
                            return (
                                <ShopProduct {...product} key={product._id}/>
                            )
                        })
                    }
                </div>

                {
                    this.state.showCart ? <ShopCart className='shop__cart'/> : ''
                }
                {/* cart button */}
                <CartButton onClick={this.handleAddToCart} className='shop__cart-button' icon='fas fa-cart-plus' />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { categories, filteredProducts } = state.shop
    return{ 
        categories,
        filteredProducts
     }
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;