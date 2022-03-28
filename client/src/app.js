import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import {useDispatch} from 'react-redux';

import Nav from './components/nav/nav';
import Home from './components/home';
import Authentication from './components/authentication/authentication';
import AddPost from './components/addPost/addPost';
import Profile from './components/profile/profile';

import {getPosts} from './actions/post';

const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.down('sm')]:({
        container:{
            width:'100%',
            overflowY:'hidden'
        }
    })
}))


const App = () => {
    const classes = useStyles();
    const [connecter,setConnecter] = useState(false);
    const [addPost,setAddPost] = useState(false);
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    },[dispatch])

    return(
        <Router>
        <Container className={classes.container} maxWidth='xl' style={{padding:'0'}}>
            <Nav setConnecter={setConnecter} setAddPost={setAddPost} user={user} setUser={setUser}/>
            <Authentication connecter={connecter} setConnecter={setConnecter} setUser={setUser}/>
            <AddPost addPost={addPost} setAddPost={setAddPost}/>
                <Switch>
                    <Route path='/' exact component={() => (<Home user={user}/>)}/>
                    <Route path={'/:id'} exact component={() => (<Profile setUser={setUser} user={user}/>)}/>
                </Switch>
        </Container>
        </Router>
    )
}

export default App;