import React from 'react';
import {useDispatch} from 'react-redux';
import { Typography,Paper,IconButton } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import useStyles from './styles';

import { deletePost } from '../../../actions/post';


const DeleteConfirmation = ({post,deleteConfirmation,setDeleteConfirmation}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const deleteHandler = async () => {
        dispatch(deletePost(post._id));
        setDeleteConfirmation(false);
    }
    const deleteConfirmationDenied = () => {
        setDeleteConfirmation(false);
    }

    return(
        <div className={deleteConfirmation ? classes.container:classes.noContainer}>
            <Paper elevation={2} className={classes.box}>
                <Typography variant='body2'>voulez-vous vraiment supprimer cette publication ?</Typography>
                    <div className={classes.buttonsDiv}>
                        <button onClick={deleteHandler}>Confirmer</button>
                        <button onClick={deleteConfirmationDenied}>Annuler</button>
                    </div>
                    <IconButton onClick={deleteConfirmationDenied} className={classes.closeIcon}>
                        <HighlightOffIcon style={{color:'#000',fontSize:'1.3rem'}}/>
                    </IconButton>
            </Paper>
        </div>
    )
}

export default DeleteConfirmation;