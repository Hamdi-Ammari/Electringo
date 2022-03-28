import React from 'react';
import { makeStyles,CircularProgress} from '@material-ui/core';
import {useSelector} from 'react-redux';

import ItemBox from './itemBox/itemBox';

const useStyles = makeStyles((theme) => ({
    container:{
        width:'60%',
        margin:'55px auto 0',
        padding:'.5rem 0',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    circularProgressDiv:{
        minHeight:'70vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    [theme.breakpoints.down('sm')]:({
        container:{
            width:'99%',
            margin:'55px auto 0',
            overflowY:'hidden',
        }, 
        
    })
}))

const Home = ({user}) => {
    const classes = useStyles();
    const {posts} = useSelector(state => state.postReducer);
    const sortedByDate = posts.sort((a,b) => (a.createdAt < b.createdAt ? 1 : -1));

    return(
    <div className={classes.container}>
        {sortedByDate.length ? (
            <>
                {sortedByDate.map(post => (
                    <ItemBox key={post._id} post={post} user={user}/>
                ))}
            </>
        ) : (
            <div className={classes.circularProgressDiv}>
                <CircularProgress size='7rem' thickness={1}/>
            </div>
        ) }
    </div>
    )
}

export default Home;