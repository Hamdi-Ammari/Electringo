export const postReducer = (state={posts:[],userProfile:null},action) => {
    switch(action.type) {
        case 'GET_USER_PROFILE':
            return {...state,userProfile:action.payload};
        case 'GET_POSTS':
            return {...state,posts:action.payload};
        case 'CREATE_POST':
            return {...state,posts:[...state.posts,action.payload]};
        case 'ADD_COMMENTS':
        case 'ADD_LIKES':
            return {
                ...state,
                posts:state.posts.map(post => post._id === action.payload._id ? action.payload : post)
            }
        case 'DELETE_POST':
            return {
                ...state,
                posts:state.posts.filter(post => post._id !== action?.payload)
            }
        default:
            return state
    }
}