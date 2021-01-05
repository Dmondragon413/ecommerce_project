import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

function FormSearchBar(props) {
    return (
        <input className={`${props.className} form-search-bar`} {...props.input} type='text' placeholder={`${props.placeholder}`} />
    )
}

class ShopSearchBar extends Component {
    render() {
        const { className, handleSubmit } = this.props;            // form vs. input tags...
        return( 
            <form onSubmit={handleSubmit} className={`${className} shop-search-bar`} >  
                <Field name='query' className='shope-search-bar__form-search-bar' placeholder='Search' component={FormSearchBar} />  {/*  here we are calling on a component created on line 5  */}
            </form>
        )
    }
}

ShopSearchBar = reduxForm({                    // connecting to REDUX-FORM
    form: 'ShopSearchBar'
})(ShopSearchBar);

export default ShopSearchBar;