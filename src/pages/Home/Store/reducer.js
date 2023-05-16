import { PRODUCT_INFO, SET_BUYITEMS_INFO, ADD_BUYITEMS_INFO, SET_MODAL_STATUS, SET_STRIPE_CLIENT_SECRET } from './constants';

const initialState = {
    productInfo: [],
    buyItems: [],
    isModalStatus: Boolean,
    clientSecret: ""
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_INFO:
            return {
                ...state,
                productInfo: action.data
            };
        case SET_BUYITEMS_INFO:
            return {
                ...state,
                buyItems: action.data
            };
        case ADD_BUYITEMS_INFO:
            return {
                ...state,
                buyItems: action.data
            };
        case SET_MODAL_STATUS: 
            return {
                ...state,
                isModalStatus: action.data
            };
        case SET_STRIPE_CLIENT_SECRET: 
            return {
                ...state,
                clientSecret: action.data
            };
        default: 
            return state;
    }
};

export default dashboardReducer;