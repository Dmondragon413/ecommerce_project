import React, { Component } from 'react';

import { UnderlinedTitle, InfoTitle } from './infoHelp';

class OrderSummary extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} order-summary`}>
                <UnderlinedTitle className='order-summary__title'/>
                <InfoTitle className='order-summary__subtotal' title='4 stickers' value='$7.48' />
                <InfoTitle className='order-summary__tax-shipping' title='Taxes & Shipping' value='$0.20' />
                <InfoTitle className='order-summary__total' title='total' value='$7.68' />
            </div>
        )
    }
}

export default OrderSummary;