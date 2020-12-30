import {
    SET_NAVBAR_LINKS
} from '../actions/types';

const INITIAL_STATE = {
    categories: [],
    selectedCategoryId: 0,
    productsSelected: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_NAVBAR_LINKS:
            return {
                ...state,
                categories: action.payload
            }
    
        default: return state
    }
}