import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {Typography,Button,IconButton} from '@material-ui/core';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import useStyles from './styles';

import { getUserProfile } from '../../actions/post';



const Nav = ({setConnecter,setAddPost,user,setUser}) => {
    const classes = useStyles();
    const history = useHistory();
    const {authData} = useSelector(state => state.authReducer);
    const dispatch = useDispatch()


    const setConnecterHandler = () => {
        setConnecter(prevConnecter => !prevConnecter)
    }
    const setAddPostHandler = () => {
        setAddPost(prevAddPost => !prevAddPost)
    }
    const goHomeHandler = () => {
        history.push('/')
    }
    const goToProfile = () => {
        dispatch(getUserProfile(user?.result?._id))
        history.push(`/${user?.result?._id}`)
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    },[authData])

    return(
        <nav className={classes.navBar}>
            <form onSubmit={goHomeHandler}>
                <Button type='submit'>
                    <Typography className={classes.title} variant='h5'>electringo</Typography>                    
                </Button>
            </form>
            {user ? (
                <div className={classes.iconsDiv}>
                    <IconButton className={classes.iconBtn} onClick={setAddPostHandler}>
                        <AddBoxOutlinedIcon className={classes.icon}/>
                    </IconButton>
                    <IconButton className={classes.iconBtn} onClick={goToProfile}>
                        <AccountCircleOutlinedIcon className={classes.icon}/>                    
                    </IconButton>
                </div>
                ) : (
                <button onClick={setConnecterHandler} className={classes.button}>se connecter</button>
            )}
        </nav>
    )
}

export default Nav;