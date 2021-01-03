import React, { Component } from 'react';

import * as actions from '../../actions';
import { connect } from 'react-redux';

class Shop extends Component {
    componentDidMount() {

        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: '/signin'
            },
            
        ]

        this.props.setHeaderLinks(headerLinks);
        this.props.fetchShopCategories();
        this.props.fetchShopProducts();
        // set the header links
        // fetch shop products action creator
        // fetch navbar links
            // set the navbar links
            // filter products with links
    }

    shouldComponentUpdate(nextProps) {    // does react know that this is going to be looking into next props? how does that work ??
        if(this.props != nextProps) { 
            this.props.setNavbarLinks(nextProps.categories, (_id) => this.props.filterProductsWithCategoryId(_id));
        }
        return true                       // why return true?? what is currently false ??
    }

    render() {
        return(
            <div className='shop'>
                {/* search bar component */}
                {/* products */}
                {/* cart button */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { categories } = state.shop
    return{ 
        categories
     }
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;