import * as api from '../api';

export const getUserProfile = (id) => async (dispatch) => {
    try {
        const {data} = await api.getUserProfile(id);
        dispatch({
            type:'GET_USER_PROFILE',
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

export const getPosts = () => async(dispatch) => {
    try {
        const {data} = await api.getPosts();
        dispatch({
            type:'GET_POSTS',
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (inputValue) => async(dispatch) => {
    try {
        const {data} = await api.createPost(inputValue);
        dispatch({
            type:'CREATE_POST',
            payload:data
        })
    } catch (error) {
        console.log(error);
    }
}

export const addLikes = (id) => async(dispatch) => {
    try {
        const {data} = await api.addLikes(id);
        dispatch({
            type:'ADD_LIKES',
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

export const addComments = (value,id) => async(dispatch) => {
    try {
        const {data} = await api.addComments(value,id);
        dispatch({
            type:'ADD_COMMENTS',
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async(dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({
            type:'DELETE_POST',
            payload:id
        })
    } catch (error) {
        console.log(error)
    }
}

export const addPrice = (priceValue,id) => async (dispatch) => {
    try {
        const {data} = await api.addPrice(priceValue,id);
        dispatch({
            type:'ADD_PRICE',
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

export const sendOrder = (emailText) => async (dispatch) => {
    try {
        const {data} = await api.sendOrder(emailText);
        dispatch({
            type:'SEND_ORDER',
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}
