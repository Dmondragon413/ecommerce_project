import React, { Component } from 'react';

class BluePriceTag extends Component {
    render() {
        const { className, title } = this.props
        return(
            <div className={`${className} blue-price-tag`}>
                ${title}
            </div>
        )
    }
}

export default BluePriceTag;