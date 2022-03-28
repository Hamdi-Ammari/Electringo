import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Typography,Avatar,CircularProgress } from '@material-ui/core';
import useStyles from './styles';
import {logout} from '../../actions/auth';

import ItemBox from '../itemBox/itemBox';

const Profile = ({setUser,user}) => {
    const classes = useStyles();
    const [timer,setTimer] = useState(false);
    const [infoActive,setInfoActive] = useState(true);
    const [pubActive,setPubActive] = useState(false);
    const [deconnectionActive,setDeconnectionActive] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const {userProfile} = useSelector(state => state.postReducer);
    const {posts} = useSelector(state => state.postReducer);
    const userPosts = posts.filter(post => post?.creator === userProfile?._id);

    const infoActiveHandler = () => {
        setInfoActive(true);
        setPubActive(false);
        setDeconnectionActive(false)
    }
    const pubActiveHandler = () => {
        setPubActive(true);
        setInfoActive(false);
        setDeconnectionActive(false);
    }
    const logoutHandler = () => {
      dispatch(logout())
      history.push('/')
      setUser(null)
    }

    return(
        <>
        {!userProfile ? (
            <div className={classes.circularProgressDiv}>
                <CircularProgress size='7rem' thickness={1}/>
            </div>
        ):(
            <div className={classes.container}>
                <div className={classes.sideBox}>
                    <div className={classes.userAvatar}>
                        <Avatar className={classes.avatar}>{userProfile?.nom.charAt(0) + userProfile?.prenom.charAt(0)}</Avatar>
                        <Typography variant='h6' className={classes.name}>{`${userProfile?.nom.charAt(0).toUpperCase() + userProfile?.nom.slice(1)} ${userProfile?.prenom.charAt(0).toUpperCase() + userProfile?.prenom.slice(1)} `}</Typography>
                    </div>
                    <div className={classes.infoNPosts}>
                        <Typography variant='body2' className={`${classes.sideBtn} ${infoActive && classes.active}`} onClick={infoActiveHandler}>Information generale</Typography>
                        <Typography variant='body2' className={`${classes.sideBtn} ${pubActive && classes.active}`} onClick={pubActiveHandler}>Publications</Typography>
                        {userProfile?._id === user?.result?._id && (
                            <Typography variant='body2' className={`${classes.sideBtn}`} onClick={logoutHandler}>Deconnection</Typography>
                        )}
                    </div>
                </div>
                <div className={classes.mainBox}>
                    {infoActive ? (
                        <>
                            <Typography variant='h6' className={classes.title}>Information generale</Typography>
                            <div className={classes.valueBox}>
                                <div className={classes.infoField}>
                                    <Typography variant='body2' style={{'fontWeight':'bold'}}>Nom</Typography>
                                    <Typography variant='body2'>{userProfile?.nom.charAt(0).toUpperCase() + userProfile?.nom.slice(1)}</Typography>
                                </div>
                                <div className={classes.infoField}>
                                    <Typography variant='body2' style={{'fontWeight':'bold'}}>Prenom</Typography>
                                    <Typography variant='body2'>{userProfile?.prenom.charAt(0).toUpperCase() + userProfile?.prenom.slice(1)}</Typography>
                                </div>
                                <div className={classes.infoField}>
                                    <Typography variant='body2' style={{'fontWeight':'bold'}}>Tel</Typography>
                                    <Typography variant='body2'>{userProfile?.phoneNumber}</Typography>
                                </div>
                                <div className={classes.infoField}>
                                    <Typography variant='body2' style={{'fontWeight':'bold'}}>Adresse</Typography>
                                    <Typography variant='body2'>{userProfile?.adresse}</Typography>
                                </div>
                            </div>
                        </>
                        ) : (
                        <div className={classes.valueBox}>
                            {userPosts.length > 0 ? (
                                <>
                                {userPosts.map(post => (
                                    <ItemBox key={post._id} post={post} user={user} userProfile={userProfile}/>
                                ))}
                                </>
                            ) : (
                                <div className={classes.noPubDiv}>
                                    <Typography variant='body2'>Aucune Publication</Typography>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        )}
        </>
    )
}

export default Profile;