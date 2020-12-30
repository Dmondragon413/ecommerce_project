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
        // set the header links
        // fetch shop products action creator
        // fetch navbar links
            // set the navbar links
            // filter products with links
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
    return{ state }
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;