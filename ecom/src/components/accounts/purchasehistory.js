import React, { Component } from 'react';

import PageTitle from '../pagetitle';

class PurchaseHistory extends Component {
    render() {
        return (
            <div className='purchase-history'>
                <PageTitle className='purchase-history__page-title' title='Purchase History'/>
            </div>
        )
    }
}

export default PurchaseHistory;