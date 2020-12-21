import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                title: 'purchase 1',
                total: 34.49,
                orderNumber: 'D9878709821',
                orderDate: new Date(),
                creditCard: '-9832',
                user: {
                    name: 'David Mondragon',
                    shippingAddress: '1574 westside street'
                }
            },
            {
                _id: 1,
                title: 'purchase 2',
                total: 9.39,
                orderNumber: 'R9372239821',
                orderDate: new Date(),
                creditCard: '-0302',
                user: {
                    name: 'Alberto Mondragon',
                    shippingAddress: '1234 westside street'
                }
            },
            {
                _id: 2,
                title: 'purchase 3',
                total: 23.49,
                orderNumber: 'A6455709821',
                orderDate: new Date(),
                creditCard: '-6552',
                user: {
                    name: 'Ana Mondragon',
                    shippingAddress: '9377 van buren blvd'
                }
            },
            {
                _id: 3,
                title: 'purchase 4',
                total: 53.99,
                orderNumber: 'D9878709821',
                orderDate: new Date(),
                creditCard: '-1282',
                user: {
                    name: 'Daniel Dann',
                    shippingAddress: '4034 west street'
                }
            },
            {
                _id: 4,
                title: 'purchase 5',
                total: 33.84,
                orderNumber: 'L48472369904',
                orderDate: new Date(),
                creditCard: '-3442',
                user: {
                    name: 'Samie Castro',
                    shippingAddress: '933 nelson street'
                }
            },
            {
                _id: 5,
                title: 'purchase 6',
                total: 53.49,
                orderNumber: 'P0038334432',
                orderDate: new Date(),
                creditCard: '-4555',
                user: {
                    name: 'Sidney Aguirre',
                    shippingAddress: '7732 thisway street'
                }
            },
            {
                _id: 6,
                title: 'purchase 7',
                total: 63.49,
                orderNumber: 'E44321821',
                orderDate: new Date(),
                creditCard: '-2398',
                user: {
                    name: 'Kyle Gomez',
                    shippingAddress: '1234 westside street'
                }
            },
            {
                _id: 7,
                title: 'purchase 8',
                total: 40.89,
                orderNumber: 'D9878709821',
                orderDate: new Date(),
                creditCard: '-3232',
                user: {
                    name: 'Benjy Horreta',
                    shippingAddress: '1234 westside street'
                }
            },
        ]
    })
}