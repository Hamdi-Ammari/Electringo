import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:7000'});
//const API = axios.create({baseURL:'https://electringo.herokuapp.com'});

API.interceptors.request.use(req => {
    if(localStorage.getItem('user')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
    }
    return req;
});

export const register = (inputValue) => API.post('/auth/register',inputValue);
export const login = (inputValue) => API.post('/auth/login',inputValue);

export const getUser = (phone) => API.post('/auth/getUser',phone);

export const getUserProfile = (id) => API.get(`/${id}`);

export const getPosts = () => API.get('/');
export const createPost = (inputValue) => API.post('/',inputValue);
export const addLikes = (id) => API.patch(`/likes/${id}`);
export const addComments = (value,id) => API.post(`/comments/${id}`,value);
//export const uploadImage = (inputValue) => API.post('/uploadImage',inputValue);
export const deletePost = (id) => API.delete(`/${id}`);
export const addPrice = (value,id) => API.post(`/${id}`,{value});
export const sendOrder = (emailText) => API.post('/send',emailText)
