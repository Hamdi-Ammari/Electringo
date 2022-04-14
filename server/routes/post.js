import express from 'express';
import {getPosts,createPost,addLikes,addComments,deletePost,getUserProfile,sendOrder} from '../controllers/post.js';
import auth from '../middleware/auth.js';

const postRoute = express.Router();

postRoute.get('/',getPosts);
postRoute.post('/',auth,createPost);
postRoute.patch('/likes/:id',auth,addLikes);
postRoute.post('/comments/:id',auth,addComments);
postRoute.delete('/:id',auth,deletePost);
postRoute.post('/send',sendOrder);


postRoute.get('/:id',auth,getUserProfile);

export default postRoute;

