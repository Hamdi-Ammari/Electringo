import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import { Typography,IconButton,InputAdornment } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Cleave from 'cleave.js/react';
import CleavePhone from 'cleave.js/dist/addons/cleave-phone.tn';
import {useDispatch} from 'react-redux';
import useStyles from './styles';

import {login,register,clearError} from '../../actions/auth';


const Authentication = ({connecter,setConnecter}) => {
    const classes = useStyles();
    const [signUp,setSignUp] = useState(false);
    const [showPassword,setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const {authData} = useSelector(state => state.authReducer);
    const {error} = useSelector(state => state.authReducer);
    const [errorMsg,setErrorMsg] = useState('');

    const initialState = {
        nom:'',
        prenom:'',
        adresse:'',
        phoneNumber:'',
        password:'',
        nomError:'',
        prenomError:'',
        adresseError:'',
        phoneNumberError:'',
        passwordError:''
    }
    const [formData,setFormData] = useState(initialState);

    const validate = () => {
        let nomError = '';
        let prenomError = '';
        let adresseError = '';
        let phoneNumberError = '';
        let passwordError = '';
 
        //nom 
        if(!formData.nom) {
            nomError='le champ est vide'   
        } else if (formData.nom.length < 3){
            nomError='minimum 3 characters'
        } else if (formData.nom.length > 12){
            nomError='maximum 12 characters'
        } else if(!/^[a-z]+$/i.test(formData.nom)){
            nomError='letter alphabet seulement'
        }

        //prenom 
        if(!formData.prenom) {
            prenomError='le champ est vide'   
       } else if (formData.prenom.length < 3){
            prenomError='minimum 3 characters'
       } else if (formData.prenom.length > 12){
            prenomError='maximum 12 characters'
       } else if(!/^[a-z]+$/i.test(formData.prenom)){
            prenomError='letter alphabet seulement'
       }

       // adresse
       if(!formData.adresse) {
        adresseError='le champ est vide'
       }
         
        //phone number
        if(!formData.phoneNumber) {
            phoneNumberError='le champ est vide'   
        } else if(formData.phoneNumber.replace(/ +/g,"").length < 8) {
            phoneNumberError='minimum 8 characters'
        }

        //password
        if(!formData.password) {
            passwordError='le champ est vide'
        } else if(formData.password.length < 8) {
            passwordError='minimum 8 characters'
        }
 
        if(nomError || prenomError || adresseError || phoneNumberError || passwordError) {
            setFormData({...formData,nomError,prenomError,adresseError,phoneNumberError,passwordError})
            return false
        }
 
        return true
     }

    const closeConnecter = () => {
        setConnecter(connecter => !connecter);
        setSignUp(false);
        setShowPassword(false);
        setFormData(initialState);
        dispatch(clearError())
    }

    const switchMode = () => {
        setSignUp(prevState => !prevState);
        setShowPassword(false);
        setFormData(initialState);
        dispatch(clearError())
    }

    const showPasswordHandler = () => {
        setShowPassword(prevShowPassword => !prevShowPassword)
    }

    const onChangeHandler = (e) => {
        setFormData({...formData,[e.target.name] : e.target.value});
    }

    const registerHandler = (e) => {
        e.preventDefault();
        const isValid = validate();
        if(isValid) {
            dispatch(register(formData));
        }
    }

    const loginHandler = async (e) => {
        e.preventDefault();
        dispatch(login(formData));
    }

    useEffect(() => {
        if(authData?.token) {
            closeConnecter();
            dispatch(clearError())
        }
    },[authData])

    return(
        <div className={connecter ? classes.container : classes.noContainer}>
            <div className={classes.connectionBox}>
                <IconButton onClick={closeConnecter} className={classes.closeBtn}>
                    <HighlightOffIcon style={{color:'#000',fontSize:'1.3rem'}}/>
                </IconButton>
                <Typography style={{fontSize:'.9rem',fontWeight:'bold'}} variant='body2'>{!signUp ? 'Se Connecter':'Créer un compte'}</Typography>
                {signUp ? (
                    <div className={classes.divForm}>
                        <form className={classes.form} onSubmit={registerHandler}>
                            <div className={classes.inputCont}>
                                <input className={classes.input} name='nom' type='text' id='nom' placeholder='Nom' onChange={onChangeHandler} value={formData.nom}/>
                                <Typography className={classes.text} variant='body2'>{formData.nomError}</Typography>
                            </div>
                            <div className={classes.inputCont}>
                                <input className={classes.input} name='prenom' type='text' id='prenom' placeholder='Prenom' onChange={onChangeHandler} value={formData.prenom}/>
                                <Typography className={classes.text} variant='body2'>{formData.prenomError}</Typography>
                            </div>
                            <div className={classes.inputCont}>
                                <select className={classes.selectInput} name='adresse' type='text' id='adresse' placeholder='Adresse' onChange={onChangeHandler} value={formData.adresse}>
                                    <option value='' selected disabled>Adresse</option>
                                    <option>Tunis</option>
                                    <option>Ariana</option>
                                    <option>Ben Arous</option>
                                    <option>Manouba</option>
                                    <option>Nabel</option>
                                    <option>Zaghouan</option>
                                    <option>Bizerte</option>
                                    <option>Béja</option>
                                    <option>Jendouba</option>
                                    <option>kef</option>
                                    <option>Siliana</option>
                                    <option>Sousse</option>
                                    <option>Monastir</option>
                                    <option>Mahdia</option>
                                    <option>Sfax</option>
                                    <option>Kairouan</option>
                                    <option>Kasserine</option>
                                    <option>Sidi Bouzid</option>
                                    <option>Gabès</option>
                                    <option>Medenine</option>
                                    <option>Tataouine</option>
                                    <option>Gafsa</option>
                                    <option>Tozeur</option>
                                    <option>Kebili</option>
                                </select>
                                <Typography variant='body2' className={classes.text}>{formData.adresseError}</Typography>
                            </div>
                            <div className={classes.inputCont}>
                                <Cleave name='phoneNumber' className={classes.input} placeholder='Téléphone' options={{phone:true,phoneRegionCode:'TN'}} onChange={onChangeHandler} value={formData.phoneNumber}/>
                                <Typography variant='body2' className={classes.text}>{formData.phoneNumberError}</Typography>
                            </div>
                            <div className={classes.inputCont}>
                                <input className={classes.input} name='password' type={showPassword ? 'text':'password'} id='password' placeholder='Mot de passe' onChange={onChangeHandler} value={formData.password} />
                                <IconButton onClick={showPasswordHandler} className={classes.visibilityIcon}>
                                    {!showPassword ? <VisibilityIcon style={{fontSize:'1.2rem',color:'#000'}}/> : <VisibilityOffIcon style={{fontSize:'1.2rem',color:'#000'}}/>}
                                </IconButton>
                                <Typography variant='body2' className={classes.text}>{formData.passwordError}</Typography>
                            </div>
                            <button type='submit' className={classes.button}>Créer</button>
                            {error && (
                                <Typography variant='body2' className={classes.errorMsg}>{error}</Typography>
                            )}
                        </form>
                        <Typography style={{fontSize:'.75rem',color:'#555',margin:'.5rem 0'}} variant='body2'>En vous connectant, vous acceptez les termes et conditions et la politique de confidentialité</Typography>
                        <Typography style={{fontSize:'.8rem'}} variant='body2'>Avez-vous un compte ?
                            <span onClick={switchMode} style={{color:'#18A0FB', marginLeft:'4px',cursor:'pointer'}}>Se Connecter</span>
                        </Typography>
                    </div>
                ) : (
                    <div className={classes.divForm}>
                        <form className={classes.form} onSubmit={loginHandler}>
                            <div className={classes.inputCont}>
                                <Cleave name='phoneNumber' className={classes.input} placeholder='Téléphone' options={{phone:true,phoneRegionCode:'TN'}} onChange={onChangeHandler} value={formData.phoneNumber}/>
                                <Typography variant='body2' className={classes.text}>{formData.phoneNumberError}</Typography>
                            </div>
                            <div className={classes.inputCont}>
                                <input className={classes.input} name='password' type={showPassword ? 'text' : 'password'} id='password' placeholder='Mot de passe' onChange={onChangeHandler} value={formData.password}/>
                                <IconButton onClick={showPasswordHandler} className={classes.visibilityIcon}>
                                    {!showPassword ? <VisibilityIcon style={{fontSize:'1.2rem',color:'#000'}}/> : <VisibilityOffIcon style={{fontSize:'1.2rem',color:'#000'}}/>}
                                </IconButton>
                                <Typography variant='body2' className={classes.text}>{formData.passwordError}</Typography>
                            </div>
                            <button type='submit' className={classes.button}>Se Connecter</button>
                            <Typography variant='body2' className={classes.errorMsg}>{error}</Typography>
                        </form>
                        <Typography style={{fontSize:'.75rem',color:'#555',margin:'1rem 0'}} variant='body2'>En vous connectant, vous acceptez les termes et conditions et la politique de confidentialité</Typography>
                        <Typography style={{fontSize:'.8rem'}} variant='body2'>Vous êtes nouveau ? 
                            <span onClick={switchMode} style={{color:'#18A0FB', marginLeft:'4px',cursor:'pointer'}}>Créer un compte</span>
                        </Typography>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Authentication;