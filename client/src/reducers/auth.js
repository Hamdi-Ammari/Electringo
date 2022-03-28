export const authReducer = (state = {authData:null,error:null,userSearched:null},action) => {
    switch(action.type) {
        case 'AUTH' : 
            localStorage.setItem('user',JSON.stringify({...action?.payload}));
            return {...state,authData:action?.payload};
        case 'LOGOUT':
            localStorage.clear();
            return {...state,authData:null};
        case 'ERROR':
            return {...state,error:action?.payload}
        case 'CLEAR_ERROR':
            return {...state,error:null}
        case 'GET_USER':
            return {...state,userSearched:action?.payload}
        case 'CLEAR_GET_USER':
            return {...state,userSearched:null}
        default:
            return state
    }
}