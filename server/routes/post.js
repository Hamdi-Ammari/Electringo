import express from 'express';
import {getPosts,createPost,deletePost,getUserProfile,sendOrder} from '../controllers/post.js';
import auth from '../middleware/auth.js';

const postRoute = express.Router();

postRoute.get('/',getPosts);
postRoute.post('/',auth,createPost);
postRoute.delete('/:id',auth,deletePost);
postRoute.post('/send',sendOrder);


postRoute.get('/:id',auth,getUserProfile);

export default postRoute;

