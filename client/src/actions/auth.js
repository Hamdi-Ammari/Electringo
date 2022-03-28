import * as api from '../api';

export const register = (inputValue) => async (dispatch) => {
    try {
        const {data} = await api.register(inputValue);
        dispatch({
            type:'AUTH',
            payload:data
        })
    } catch (error) {
        dispatch({
            type:'ERROR',
            payload:error.response.data.message
        })
        console.log(error.response.data.message)
    }
}

export const login = (inputValue) => async (dispatch) => {
    try {
        const {data} = await api.login(inputValue);
        dispatch({
            type:'AUTH',
            payload:data
        })
    } catch (error) {
        dispatch({
            type:'ERROR',
            payload:error.response.data.message
        })
    }
}
export const getUser = (phone) => async (dispatch) => {
    try {
        const {data} = await api.getUser(phone);
        dispatch({
            type:'GET_USER',
            payload:data
        })
    } catch (error) {
        dispatch({
            type:'ERROR',
            payload:error.response.data.message
        })
    }
}

export const clearGetUser = () => {
    return {
        type:'CLEAR_GET_USER'
    }
}

export const logout = () => {
    return {
        type:'LOGOUT',
    }
}

export const clearError = () => {
    return{
        type:'CLEAR_ERROR'
    }
}