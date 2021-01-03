import {
    SET_SHOP_CATEGORIES,
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID
} from './types';

export function filterProductsWithCategoryId(_id) {
    return ({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id
    })
}

export function fetchShopCategories() {
    return ({
        type: SET_SHOP_CATEGORIES,
        payload: [
            {
                _id: 0,
                title: 'All'
            },
            {
                _id: 1,
                title: 'JavaScript'
            },
            {
                _id: 2,
                title: 'UI/UX'
            },
            {
                _id: 3,
                title: 'Linux'
            },
            {
                _id: 4,
                title: 'Python'
            },
            {
                _id: 5,
                title: 'UML'
            },
            {
                _id: 6,
                title: 'Ruby'
            }
        ]
    })
}

export function fetchShopProducts() {
    return({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'Javascript in the Browser',
                description: `${'Then in here we want to SET_SHOP_PRODUCTS and then we obviously have to create this type. So let\'s put it up here in our import and go into our types and underneath here will say export const SET_SHOP_PRODUCTS and I know we\'re not using SET_SHOP_PRODUCTS categories but let\'s just leave it there just in case we need it at some point.'}`,
                price: 1.89,
                belongsTo: [0, 1]
            },
            {
                _id: 1,
                title: 'Graph Database',
                description: `${'Then in here we want to SET_SHOP_PRODUCTS and then we obviously have to create this type. So let\'s put it up here in our import and go into our types and underneath here will say export const SET_SHOP_PRODUCTS and I know we\'re not using SET_SHOP_PRODUCTS categories but let\'s just leave it there just in case we need it at some point.'}`,
                price: 1.89,
                belongsTo: [0, 1]
            },
            {
                _id: 2,
                title: 'Full Stack Development',
                description: `${'Then in here we want to SET_SHOP_PRODUCTS and then we obviously have to create this type. So let\'s put it up here in our import and go into our types and underneath here will say export const SET_SHOP_PRODUCTS and I know we\'re not using SET_SHOP_PRODUCTS categories but let\'s just leave it there just in case we need it at some point.'}`,
                price: 1.89,
                belongsTo: [0, 1, 4]
            },
            {
                _id: 3,
                title: 'Javscript Development',
                description: `${'Then in here we want to SET_SHOP_PRODUCTS and then we obviously have to create this type. So let\'s put it up here in our import and go into our types and underneath here will say export const SET_SHOP_PRODUCTS and I know we\'re not using SET_SHOP_PRODUCTS categories but let\'s just leave it there just in case we need it at some point.'}`,
                price: 1.89,
                belongsTo: [0, 1]
            },
            {
                _id: 4,
                title: 'User Interface Design',
                description: `${'Then in here we want to SET_SHOP_PRODUCTS and then we obviously have to create this type. So let\'s put it up here in our import and go into our types and underneath here will say export const SET_SHOP_PRODUCTS and I know we\'re not using SET_SHOP_PRODUCTS categories but let\'s just leave it there just in case we need it at some point.'}`,
                price: 1.89,
                belongsTo: [0, 1,5]
            },
            {
                _id: 5,
                title: 'User Experience Design',
                description: `${'Then in here we want to SET_SHOP_PRODUCTS and then we obviously have to create this type. So let\'s put it up here in our import and go into our types and underneath here will say export const SET_SHOP_PRODUCTS and I know we\'re not using SET_SHOP_PRODUCTS categories but let\'s just leave it there just in case we need it at some point.'}`,
                price: 1.89,
                belongsTo: [0, 2]
            },
            {
                _id: 6,
                title: 'Advanced Object Oriented Programming',
                description: `${'Then in here we want to SET_SHOP_PRODUCTS and then we obviously have to create this type. So let\'s put it up here in our import and go into our types and underneath here will say export const SET_SHOP_PRODUCTS and I know we\'re not using SET_SHOP_PRODUCTS categories but let\'s just leave it there just in case we need it at some point.'}`,
                price: 1.89,
                belongsTo: [0, 6]
            }
        ]
    })
}