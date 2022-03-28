import {makeStyles} from '@material-ui/core';

export default makeStyles((theme) => ({
    container:{
        position:'fixed',
        top:'0',
        right:'0',
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,.4)',
        zIndex:'10',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    noContainer:{
        display:'none'
    },
    box:{
        width:'420px',
        height:'200px',
        padding:'1rem',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        '& > *':{
            fontSize:'.9rem',
            textAlign:'center'
        }
    },
    closeIcon:{
        position:'absolute',
        top:'.5rem',
        right:'.5rem',
        padding:'.1rem',
    },
    buttonsDiv:{
        marginTop:'1rem',
        '& button':{
            width:'130px',
            padding:'.4rem',
            margin:'0 .1rem',
            borderRadius:'5px',
            cursor:'pointer',
            backgroundColor:'#fff',
            border:'1px solid #18A0FB'
        }
    },
    [theme.breakpoints.down('sm')] : ({
        box:{
            height:'35%',
            width:'99%',
            '& > *':{
                fontSize:'.82rem',
            }
        },
        buttonsDiv:{
            '& button':{
                width:'100px',
                padding:'.25rem',
                margin:'0 .1rem',
                borderRadius:'5px',
                cursor:'pointer'
            }
        },
    })
}))