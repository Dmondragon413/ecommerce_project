import React, { Component } from 'react';

import { connect } from 'react-redux';

class Navbar extends Component {
    render() {
        return (
            <div className= 'navbar'>
                {
                    this.props.navbarLinks.map((link, index) => {
                        return (
                            <a className='navbar_links' key={index} onClick={() => console.log('trynna switch tabs')}>
                                {link.title}
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { navbarLinks } = state.headerNavbar;
    return {
        navbarLinks
    }
}

Navbar = connect(mapStateToProps)(Navbar);

export default Navbar;