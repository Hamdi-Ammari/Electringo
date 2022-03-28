import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { Typography,Paper,IconButton } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Cleave from 'cleave.js/react';
import CleavePhone from 'cleave.js/dist/addons/cleave-phone.tn';
import useStyles from './styles';

import { getUser,clearError,clearGetUser } from '../../../actions/auth';
import { sendOrder } from '../../../actions/post';

const PasserUneCommande = ({post,passerUneCommande,setPasserUneCommande}) => {
    const classes = useStyles();
    const {userSearched,error} = useSelector(state => state.authReducer);
    const {userProfile} = useSelector(state => state.postReducer);
    const user = JSON.parse(localStorage.getItem('user'));

    const initialState = {
        phoneNumber:'',
        prix:''
    }
    const [formData,setFormData] = useState(initialState);
    const [prixError,setPrixError] = useState('');
    const dispatch = useDispatch()

    const closePasserUneCommande = () => {
        setPasserUneCommande(false);
        setFormData(initialState);
        setPrixError('');
        dispatch(clearError());
        dispatch(clearGetUser());
    }
    const onChangeHandler = (e) => {
        setFormData({[e.target.name] : e.target.value})
    }
    const seachUserHandler = async () => {
        dispatch(getUser(formData))
    }

    const retourHandler = () => {
        dispatch(clearGetUser());
        setPrixError('');
    }

    const output = {
        vendeurNom:user?.result?.nom,
        vendeurPrenom:user?.result?.prenom,
        vendeurAdresse:user?.result?.adresse,
        vendeurPhone:user?.result?.phoneNumber,
        acheteurNom:userSearched?.nom,
        acheteurPrenom:userSearched?.prenom,
        acheteurAdresse:userSearched?.adresse,
        acheteurPhone:userSearched?.phoneNumber,
        product:post?.produit,
        prix:formData.prix
    }

    const sendEmailHandler = (e) => {
        e.preventDefault();
        if(!formData.prix) {
            setPrixError('le champ est vide')
        } else {
            setPasserUneCommande(false);
            setFormData(initialState);
            setPrixError('');
            dispatch(clearGetUser());
            dispatch(clearError());
            dispatch(sendOrder(output));
        }
    }

    useEffect(() => {
        if(userSearched) {
            dispatch(clearError())
        }
    },[userSearched])

    return(
        <div className={passerUneCommande ? classes.container : classes.noContainer}>
            <Paper className={classes.box}>
                <IconButton onClick={closePasserUneCommande} className={classes.closeIcon}>
                    <HighlightOffIcon style={{color:'#000',fontSize:'1.3rem'}}/>
                </IconButton>
                <Typography className={classes.title} style={{textAlign:'center',fontSize:'.95rem'}} variant='h6'>Passer une commande</Typography>
                    <div className={classes.product_name_cont}>
                        <Typography variant='body2'>Produit : </Typography>
                        <Typography variant='body2' className={classes.value}>{post?.produit}</Typography>
                    </div>
                    <div className={classes.product_name_cont}>
                        <Typography variant='body2'>Vendeur : </Typography>
                        <Typography variant='body2' className={classes.value}>{`${post?.nom?.charAt(0)?.toUpperCase() + post?.nom?.slice(1)} ${post?.prenom?.charAt(0)?.toUpperCase() + post?.prenom?.slice(1)}`}</Typography>
                    </div>
                    <form onSubmit={sendEmailHandler} className={classes.form}>
                        <div className={classes.inputCont}>
                            <label>
                                <Typography variant='body2'>Acheteur : </Typography>
                            </label>
                            {userSearched ? (
                                <Typography variant='body2' className={classes.value}>{`${userSearched?.nom.charAt(0).toUpperCase() + userSearched.nom.slice(1)} ${userSearched.prenom.charAt(0).toUpperCase() + userSearched.prenom.slice(1)} - ${userSearched.adresse}`}</Typography>
                            ) : (
                                <Cleave name='phoneNumber' className={classes.input} placeholder='Entrer le numero de tel' options={{phone:true,phoneRegionCode:'TN'}} onChange={onChangeHandler} value={formData.phoneNumber}/>
                            )}
                        </div>
                        {userSearched && (
                            <>
                            <div className={classes.inputCont}>
                                <label>
                                    <Typography variant='body2'>Prix : </Typography>
                                </label>
                                <input name='prix' className={classes.input} type='number' placeholder='Entrer le prix' onChange={onChangeHandler} value={formData.prix}/>
                            </div>
                            <>
                                {prixError && (
                                    <Typography variant='body2' className={classes.errorMsg}>{prixError}</Typography>
                                )}
                            </>
                            </>
                        )}
                        <div className={classes.bntDiv}>
                            {userSearched ? (
                                <button type='submit' className={classes.searchBtn}>Confirmer</button>
                            ) : (
                                <button type='button' onClick={seachUserHandler} className={classes.searchBtn}>Chercher</button>
                            )}
                            {userSearched && (
                                <button onClick={retourHandler} className={classes.retourBtn}>Retour</button>
                            )}    
                        </div>
                        {error && (
                            <Typography variant='body2' className={classes.errorMsg}>{error}</Typography>
                        )}
                    </form>
            </Paper>
        </div>
    )
}

export default PasserUneCommande;