import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { Typography,IconButton } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import useStyles from './styles';
import {v4 as uuidv4} from 'uuid';

import {createPost} from '../../actions/post';

const AddPost = ({addPost,setAddPost}) => {
    const classes = useStyles();
    const [firstForm,setFirstForm] = useState(true);
    const [imageUrl,setImageUrl] = useState([]);
    const [firstPageError,setFirstPageError] = useState('');
    const [secondPageError,setSecondPageError] = useState('');
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'));

    const initialState = {
        produit:'',
        description:'',
        prix:'',
        image:''
    }

    const [formData,setFormData] = useState(initialState);

    const onChangeHandler = (e) => {
        setFormData({...formData,[e.target.name] : e.target.value,image:imageUrl})
    }

    const getImageUrl = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.addEventListener('load',e => {
            setImageUrl([...imageUrl,e.target.result])
        });
        reader.readAsDataURL(file) 
        e.target.value = null; 
    } 

    const closeBoxHandler = () => {
        setAddPost(prevAddPost => !prevAddPost);
        setFirstForm(true);
        setFormData(initialState);
        setImageUrl([]);
        setFirstPageError('');
        setSecondPageError('');
    }

    const firstPageForm = () => {
        if(!formData.produit || !formData.description ) {
            setFirstPageError('le champ est vide');
        } else {
            setFirstForm(false);
            setFirstPageError('')
        }
    }

    const secondPageForm = () => {
        if(imageUrl.length < 1 || !formData.prix) {
            setSecondPageError('le champ est vide');
        } else {
            setAddPost(prevAddPost => !prevAddPost);
            setFirstForm(true);
            setFormData(initialState);
            setImageUrl([]);
            setSecondPageError('');
            dispatch(createPost({...formData,nom:user?.result?.nom,prenom:user?.result?.prenom,adresse:user?.result?.adresse}))
        }
    } 

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(firstForm) {
            firstPageForm();
        } else {
            secondPageForm();
        }
    }

    const previousFormHandler = () => {
        setFirstForm(true)
    }

    const imageNumber = imageUrl.length;

    const removeImageHandler = (image) => {
      setImageUrl(imageUrl.filter(i => i !== image));
    }


    return (
        <div className={addPost ? classes.container : classes.noContainer}>
            <div className={classes.addPostBox}>
                <IconButton onClick={closeBoxHandler} className={classes.closeBtn}>
                    <HighlightOffIcon style={{color:'#000',fontSize:'1.3rem'}}/>
                </IconButton>
                <Typography style={{fontSize:'.9rem',fontWeight:'bold',textTransform:'uppercase'}} variant='body2'>Nouvelle Annonce</Typography>
                {firstForm ? ( 
                    <div className={classes.formDiv}>
                        <form className={classes.form} onSubmit={onSubmitHandler}>
                            <input className={classes.input} type='text' name='produit' placeholder='Produit' onChange={onChangeHandler} value={formData.produit}/>
                            <textarea className={classes.input} style={{minHeight:'140px',resize:'none'}} type='text' name='description' placeholder='Description' onChange={onChangeHandler} value={formData.description}/>
                            <Typography variant='body2' className={classes.errorMsg}>{firstPageError}</Typography>
                            <button type='submit' className={classes.button}>Suivant</button>
                        </form>
                    </div>
                ) : (
                    <div className={classes.formDiv}>
                        <form className={classes.form} onSubmit={onSubmitHandler}>
                            <div className={classes.addImageDiv}>
                                <div className={classes.cover}>
                                    <Typography variant='body2' style={{color:'#707070'}}>Ajoutez une image</Typography>
                                </div>
                                <input className={classes.fileInput} type='file' name='image' onChange={getImageUrl}/>
                            </div>
                            {imageNumber ? (
                                <div className={classes.divOverImagesBox}>
                                <div className={classes.imagesBox}>
                                    {imageUrl.map(image => (
                                        <div key={uuidv4()} className={classes.deviceImageDiv}>
                                            <HighlightOffIcon className={classes.removeImgBtn} onClick={() => removeImageHandler(image)}/>
                                            <img className={classes.deviceImage} src={image} alt='deviceImage'/>
                                        </div>
                                    ))}
                                </div>
                                </div>
                            ) : null}
                            <input className={classes.input} type='number' name='prix' placeholder='Prix (en DT)' onChange={onChangeHandler} value={formData.prix}/>
                            <Typography variant='body2' className={classes.errorMsg}>{secondPageError}</Typography>
                            <button style={{marginBottom:'.8rem'}} type='submit' className={classes.button}>Ajouter</button>
                        </form>
                        <button type='button' onClick={previousFormHandler} className={classes.retourBtn}>Retour</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AddPost;