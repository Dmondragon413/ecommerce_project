import { SET_HEADER_LINKS, SET_NAVBAR_LINKS } from '../actions/types';

const INITIAL_STATE = {
    headerLinks: [
        {
            title: 'yoo'
        },
        {
            title: 'YOOOO'
        }
    ],
    navbarLinks: [ 
        {
            title: 'Account',
            active: true
        },
        {
            title: 'Purchases',
            active: false
        }
    ]
}

export default function(state = INITIAL_STATE , action) {
    switch (action.type) {
        case SET_HEADER_LINKS:
            return {
                ...state,
                headerLinks: action.payload
            }
        case SET_NAVBAR_LINKS: 
            return {
                ...state,
                headerLinks: action.payload
            }
        default: return state
    }
}