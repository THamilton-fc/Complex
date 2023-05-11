import { PRODUCT_INFO, SET_BUYITEMS_INFO, ADD_BUYITEMS_INFO, SET_MODAL_STATUS } from './constants';

const initialState = {
    productInfo: [],
    buyItems: [],
    isModalStatus: Boolean
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
            }
        default: 
            return state;
    }
};

export default dashboardReducer;