export const postReducer = (state={posts:[],userProfile:null},action) => {
    switch(action.type) {
        case 'GET_USER_PROFILE':
            return {...state,userProfile:action.payload}
        case 'GET_POSTS':
            return {...state,posts:action.payload}
        case 'CREATE_POST':
            return {...state,posts:[...state.posts,action.payload]}
        case 'DELETE_POST':
            return {
                ...state,
                posts:state.posts.filter(post => post._id !== action?.payload)
            }
        case 'ADD_PRICE':
            return {...state,
                    posts:state.posts.map(post => {
                        if(post._id === action.payload._id) {
                            return action.payload
                        }
                        return post
                    })
            }
        default:
            return state
    }
}