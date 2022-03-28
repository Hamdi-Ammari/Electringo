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
        height:'80%',
        padding:'1rem',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
    },
    closeIcon:{
        position:'absolute',
        top:'.5rem',
        right:'.5rem',
        padding:'.1rem',
    },
    title:{
        marginBottom:'2rem',
        fontWeight:'bold',
        fontSize:'.95rem',
        textAlign:'center',
    },
    product_name_cont:{
        width:'90%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'.6rem 0',
        '& :first-child':{
            fontSize:'.9rem',
        }
    },
    value:{
        fontSize:'.9rem',
        fontWeight:'bold',
        width:'80%',
    },
    form:{
        width:'90%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
    },
    inputCont:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        margin:'.5rem 0',
    },
    input:{
        border:'1px solid #eee',
        borderRadius:'5px',
        width:'80%',
        padding:'.6rem .8rem',
        fontSize:'.9rem',
    },
    bntDiv:{
        width:'90%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin:'1rem auto',
        '& > *' :{
            width:'49%',
            borderRadius:'5px',
            padding:'.5rem .7rem',
            cursor:'pointer',
        }
    },
    searchBtn:{
        border:'none',
        backgroundColor:'#18A0FB',
        color:'#fff',
    },
    retourBtn:{
        backgroundColor:'#fff',
        border:'1px solid #18A0FB',
        marginLeft:'.2rem'
    },
    errorMsg:{
        fontSize:'.8rem',
        color:'red',
        textAlign:'center'
    },
    [theme.breakpoints.down('sm')] : ({
        box:{
            width:'100%',
            height:'100%'
        },
        product_name_cont:{
            width:'100%',
            '& :first-child':{
                fontSize:'.85rem',
            }
        },
        value:{
            fontSize:'.85rem',
            width:'70%',
        },
        form:{
            width:'100%',
        },
        input:{
            width:'70%',
            fontSize:'.85rem',
        },
        bntDiv:{
            width:'100%',
            '& > *' :{
                width:'40%',
                padding:'.4rem .5rem',
            }
        },
    })
}))