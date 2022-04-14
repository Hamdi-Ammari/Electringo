import React,{useState} from 'react';
import { Typography,Avatar,Paper,IconButton, Button } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import {v4 as uuidv4} from 'uuid';
import useStyles from './styles';

import DeleteConfirmation from './deleteConfirmation/deleteConfirmation';
import PasserUneCommande from './passerUneCommande/passerUneCommande';
import {getUserProfile, addLikes , addComments} from '../../actions/post';


const ItemBox = ({post,user,userProfile}) => {
    const classes = useStyles();
    const [currentIndex,setCurrentIndex] = useState(0);
    const [sideMenu,setSideMenu] = useState(false);
    const [deleteConfirmation,setDeleteConfirmation] = useState(false);
    const [passerUneCommande,setPasserUneCommande] = useState(false);
    const [commentSectionShow,setCommentSectionShow] = useState(false);
    const [commentValue,setCommentValue] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const goToProfile = async() => {
        if(!userProfile) {
            dispatch(getUserProfile(post.creator));
            history.push(`/${post.creator}`);
        }
    }

    const passerUneCommandeHandler = () => {
        setPasserUneCommande(true);
        setSideMenu(false)
    }
    const deleteConfirmationHandler = () => {
        setDeleteConfirmation(true);
        setSideMenu(false)
    }
    const gotoPrevImg = () => {
        setCurrentIndex(currentIndex - 1)
    }

    const gotoNextImg = () => {
        setCurrentIndex(currentIndex + 1)
    }
    const sideMenuToggle = () => {
        setSideMenu(prevSideMenu => !prevSideMenu)
    }
    const addLikeHandler = async () => {
        dispatch(addLikes(post._id))
    }
    const showCommentHandler = () => {
        setCommentSectionShow(prevCommentShow => !prevCommentShow)
    }
    const onChangeHandler = (e) => {
        setCommentValue(e.target.value)
    }
    const findIndex = post?.likes?.findIndex(id => id === user?.result?._id);
    const addCommentHandler = () => {
        const finalComment = {
            commentOwner : `${user?.result?.nom?.charAt(0)?.toUpperCase() + user?.result?.nom?.slice(1)} ${user?.result?.prenom?.charAt(0)?.toUpperCase() + user?.result?.prenom?.slice(1)}`,
            commentValue
        }
        dispatch(addComments(finalComment,post._id));
        setCommentValue('');
    }
    
    return(
    <div className={classes.box}>
        <div className={classes.header}>
            <div className={classes.nameBox}>
                <Avatar style={{width:'1.8rem',height:'1.8rem',marginRight:'0.5rem',textTransform:'uppercase'}} alt='Hamdi'>{post?.nom?.charAt(0)}</Avatar>
                <div className={classes.headerLeftCorner}>
                    <Typography onClick={user && goToProfile} className={`${classes.name} ${user && classes.cursorName}`} variant='body2'>{`${post?.nom?.charAt(0)?.toUpperCase() + post?.nom?.slice(1)} ${post?.prenom?.charAt(0)?.toUpperCase() + post?.prenom?.slice(1)}`}</Typography>
                    <div className={classes.timeAndAdresseDiv}>
                        <LocationOnIcon className={classes.timeAdresseText}/>
                        <Typography variant='body2' className={classes.timeAdresseText}>{post?.adresse}</Typography>
                        <Typography variant='body2' style={{marginLeft:'7px'}} className={classes.timeAdresseText}>{moment(post.createdAt).fromNow()}</Typography>
                    </div>
                </div>
            </div>
            {user?.result?._id === post.creator && (
                <IconButton onClick={sideMenuToggle} className={classes.iconBtn}>
                    <MoreHorizIcon style={{color:'#000'}}/>
                </IconButton>
            )}
            <Paper elevation={2} className={sideMenu ? classes.sideMenu : classes.noSideMenu}>
                <Button className={classes.sideMenuItem} onClick={passerUneCommandeHandler}>
                    <Typography className={classes.sideMenuItemText} variant='body2'>Passer une commande</Typography>
                </Button>
                <Button className={classes.sideMenuItem} onClick={deleteConfirmationHandler}>
                    <Typography className={classes.sideMenuItemText} variant='body2'>Supprimer</Typography>
                </Button>
            </Paper>
        </div>
        <DeleteConfirmation post={post} deleteConfirmation={deleteConfirmation} setDeleteConfirmation={setDeleteConfirmation}/>
        <PasserUneCommande post={post} passerUneCommande={passerUneCommande} setPasserUneCommande={setPasserUneCommande}/>
        <div className={classes.description}>
            <Typography className={classes.title} variant='body2'>{post.produit}</Typography>
            <Typography className={classes.parag} variant='body2'>{post.description}</Typography>
        </div>
        <div className={classes.photoDiv}>
            <div onClick={gotoPrevImg} className={`${classes.switchBtn} ${classes.prevBtn} ${currentIndex === 0 && classes.noBtn}`}>
                <ArrowForwardIosIcon className={classes.arrow}/>
            </div>
            <div onClick={gotoNextImg} className={`${classes.switchBtn} ${classes.nextBtn} ${currentIndex === post?.image?.length -1 && classes.noBtn}`}>
                <ArrowForwardIosIcon className={classes.arrow}/>
            </div>
            <img src={post.image[currentIndex]} alt={post.produit} className={`${classes.thePhoto} ${classes.multipleImages}`}/>
        </div>
        <div className={classes.footer}>
            <Paper elevation={3} className={classes.pricePaper}>
                <Typography className={classes.price} variant='body2'>{post.prix} DT</Typography>
            </Paper>
            {user && (
                <div className={classes.likeCommentBigCont}>
                    <div className={classes.likeCommentContainer}>
                        <div className={classes.likeCommentBox}>
                            <IconButton onClick={addLikeHandler} className={classes.iconBtn}>
                                {findIndex === -1 ? (
                                    <FavoriteBorderIcon className={classes.footerIcon}/>
                                ) : (
                                    <FavoriteIcon style={{color:'#d63031'}} className={classes.footerIcon}/>
                                )}
                            </IconButton>
                            <Typography className={classes.likeCommentText} variant='body2'>{post?.likes?.length}</Typography>
                        </div>
                        <div className={classes.likeCommentBox}>
                            <IconButton onClick={showCommentHandler} style={{marginLeft:'.85rem'}} className={classes.iconBtn}>
                                <ChatBubbleOutlineIcon className={classes.footerIcon}/>
                            </IconButton>
                            <Typography className={classes.likeCommentText} variant='body2'>{post?.comments?.length}</Typography>
                        </div>
                    </div>
                    {commentSectionShow ? (
                        <>
                            <form className={classes.commentForm}>
                                <input className={classes.commentInput} type='text' name='comment' id='comment' placeholder='Ajoutez un commentaire...' onChange={onChangeHandler} value={commentValue}/>
                                <IconButton onClick={addCommentHandler} className={classes.iconBtn}>
                                    <SendRoundedIcon className={classes.addCommentIcon}/>
                                </IconButton>
                            </form>
                            {post?.comments?.length > 0 && (
                                <div className={classes.allCommentsDiv}>
                                {post?.comments.map(comment => (
                                    <div key={uuidv4()} className={classes.postComment}>
                                        <Typography onClick={goToProfile} variant='body2' className={classes.commentOwner}>{comment.commentOwner}</Typography>
                                        <Typography variant='body2' className={classes.commentValue}>{comment.commentValue}</Typography>
                                    </div>
                                ))}
                                </div>
                            )}
                        </>         
                    ) : (
                        null
                    )}
                </div>
            )}
        </div>
    </div>
    )
}

export default ItemBox;