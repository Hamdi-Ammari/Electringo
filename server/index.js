import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoute from './routes/auth.js';
import postRoute from './routes/post.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json({limit:'30mb',extended:true}));
app.use(express.urlencoded({limit:'30mb',extended:true}));

app.use('/auth',userRoute);
app.use('/',postRoute);

app.get('/',(req,res) => {
        res.send('hello world')
})


const PORT = process.env.PORT || 7000;
mongoose.connect(process.env.MONGO_DB,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(() => app.listen(PORT,() => console.log(`DB is Connected & Server is running on PORT ${PORT}`)))
        .catch((error) => console.log(error));
