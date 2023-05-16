import { PRODUCT_INFO, SET_BUYITEMS_INFO, ADD_BUYITEMS_INFO, SET_MODAL_STATUS, SET_STRIPE_CLIENT_SECRET } from './constants';

async function fetchProducts() {
    const image_url = 'https://images.complex.com/complex/images/c_crop,h_1446,w_1170,x_0,y_309/c_fill,dpr_auto,f_auto,q_auto,w_920/fl_lossy,pg_1/c9xdoxymexuijdmowutr/blxst-melbourne?fimg-client';
    const products = await (await fetch(`https://2o68cldz87.execute-api.us-east-1.amazonaws.com/test/products?img_url=${image_url}`, { mode: 'cors' })).json();
    return products;
};

async function fetchClentSecret(amount) {
    const client_secret = await (await fetch(`https://2o68cldz87.execute-api.us-east-1.amazonaws.com/test/card_pay?amount=${amount}`, { mode: 'cors' })).json();
    return client_secret.result;
}

export const setProductInfo = () => {
    return async (dispatch, getState) => {
        dispatch({
            type: PRODUCT_INFO,
            data: await fetchProducts()
        });
    };
};

export const setBuyItems = (data) => {
    return (dispatch, getState) => {
        dispatch({
            type: SET_BUYITEMS_INFO,
            data
        });
    };
}

function updateBuyItems(currentBuyItems, newItem) {
    return [...currentBuyItems, newItem];
}

export const addBuyItems = (data) => {
    return async (dispatch, getState) => {
        const { buyItems } = getState().dashboard;
        dispatch({
            type: ADD_BUYITEMS_INFO,
            data: updateBuyItems(buyItems, data)
        });
    };
}

export const setModalVisible = (data) => {
    return (dispatch, getState) => {
        dispatch({
            type: SET_MODAL_STATUS,
            data
        });
    };
}

export const setClientSecret = (amount) => {
    return async (dispatch, getState) => {
        dispatch({
            type: SET_STRIPE_CLIENT_SECRET,
            data: await fetchClentSecret(amount)
        });
    };
};