import React,{useState} from 'react';
import { Typography,Avatar,Paper,IconButton, Button } from '@material-ui/core';
//import StarBorderIcon from '@material-ui/icons/StarBorder';
//import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import useStyles from './styles';

import DeleteConfirmation from './deleteConfirmation/deleteConfirmation';
import PasserUneCommande from './passerUneCommande/passerUneCommande';
import {getUserProfile} from '../../actions/post';


const ItemBox = ({post,user,userProfile}) => {
    const classes = useStyles();
    const [currentIndex,setCurrentIndex] = useState(0);
    const [sideMenu,setSideMenu] = useState(false);
    const [deleteConfirmation,setDeleteConfirmation] = useState(false);
    const [passerUneCommande,setPasserUneCommande] = useState(false)
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
            {/*user && (
                <div className={classes.iconsDiv}>
                    <Tooltip title="intéressé(e)">
                        <IconButton className={classes.iconBtn}>
                            <StarOutlineRoundedIcon className={classes.starIcon}/>
                        </IconButton>
                    </Tooltip>
                </div>
            )*/}
        </div>
    </div>
    )
}

export default ItemBox;