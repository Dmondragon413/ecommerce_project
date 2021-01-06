import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

function FormSearchBar(props) {
    return (
        <div className='search-bar-grid'>
            <i className="fas fa-search search-bar-grid__icon"></i>
            <input className={`${props.className} form-search-bar search-bar-grid__input`} {...props.input} type='text' placeholder={`${props.placeholder}`} /> {/*so here we have placed an icon and input inside a component which is then put into a field ??*/}
        </div>
    )
}

class ShopSearchBar extends Component {
    render() {
        const { className, handleSubmit } = this.props;            // form vs. input tags...
        return( 
            <form onSubmit={handleSubmit} className={`${className} shop-search-bar`} >  
                <Field name='query' className='shop-search-bar__form-search-bar' placeholder='Search' component={FormSearchBar} />  {/*  here we are calling on a component created on line 5  */}
            </form>
        )
    }
}

ShopSearchBar = reduxForm({                    // connecting to REDUX-FORM
    form: 'ShopSearchBar'
})(ShopSearchBar);

export default ShopSearchBar;