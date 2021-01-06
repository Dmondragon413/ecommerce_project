import React, { Component } from 'react';

import * as actions from '../../actions';
import { connect } from 'react-redux';
import ShopSearchBar from './shopSearchbar';
import ShopProduct from './shopProduct';

class Shop extends Component {
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

    shouldComponentUpdate(nextProps) {                       // does react know that this is going to be looking into next props? how does that work ??
        if(this.props != nextProps) {                        // so if props doesn't equal to nextprops then the selected id is placed within ??
            this.props.setNavbarLinks(nextProps.categories, (_id) => this.props.filterProductsWithCategoryId(_id));
        }
        return true                             // why return true?? what is currently false ??
    }

    onSubmit = (fields) => {
        console.log(fields)
        this.props.filterProductsWithQuery(fields)
    }

    render() {
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
                {/* cart button */}
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