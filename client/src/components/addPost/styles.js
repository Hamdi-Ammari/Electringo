import { makeStyles } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

export default makeStyles((theme) => ({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,.4)',
        position:'fixed',
        top:'0',
        right:'0',
        zIndex:'10',
        textAlign:'center',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    noContainer:{
        display:'none'
    },
    addPostBox:{
        width:'420px',
        height:'80%',
        backgroundColor:'#fff',
        borderRadius:'5px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly',
        padding:'2rem',
        position:'relative',
    },
    closeBtn:{
        position:'absolute',
        top:'1rem',
        right:'1rem',
        padding:'.1rem'
    },
    formDiv:{
        width:'90%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',
    },
    form:{
        minHeight:'40%',
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',
    },
    input:{
        border:'1px solid #eee',
        borderRadius:'5px',
        width:'100%',
        padding:'1rem',
        fontSize:'.9rem',
        marginBottom:'.8em'
    },
    addImageDiv:{
        border:'1px solid #eee',
        borderRadius:'5px',
        width:'100%',
        padding:'1.5rem 1rem',
        fontSize:'.9rem',
        marginBottom:'.8rem',
        position:'relative',
    },
    cover:{
        position:'absolute',
        top:'0%',
        left:'0%',
        width:'100%',
        height:'100%',
        backgroundColor:'#fff',
        pointerEvents:'none',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    fileInput:{
        color:'#fff'
    },
    divOverImagesBox:{
        height:'120px',
        width:'100%',
        marginBottom:'.8rem',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    imagesBox:{
        height:'120px',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        overflowY:'auto',
        '&::-webkit-scrollbar':{
            height:'5px',
            backgroundColor:'#fff'
        },
        '&::-webkit-scrollbar-thumb':{
            backgroundColor: '#888',
            borderRadius:'5px',
        }

    },
    deviceImageDiv:{
        minWidth:'100px',
        height:'100px',
        margin:'0 .1rem',
        border:'1px solid #707070',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative'
    },
    removeImgBtn:{
        position:'absolute',
        bottom:'0',
        right:'0',
        width:'1.2rem',
        height:'1.2rem',
        color:'#EE493A',
        cursor:'pointer'
    },
    deviceImage:{
        width:'92%',
        height:'92%',
        objectFit:'contain',
    },
    button:{
        border:'none',
        borderRadius:'5px',
        width:'100%',
        padding:'.7rem',
        backgroundColor:'#18A0FB',
        color:'#fff',
        cursor:'pointer'
    },
    retourBtn:{
        border:'1px solid #18A0FB',
        borderRadius:'5px',
        width:'100%',
        padding:'.7rem',
        backgroundColor:'#fff',
        cursor:'pointer'
    },
    errorMsg:{
        fontSize:'.8rem',
        color:'red',
        marginBottom:'1rem'
    },
    [theme.breakpoints.down('sm')]:({
        addPostBox:{
            width:'100%',
            height:'100%',
            justifyContent:'center',
            padding:'1rem',
            borderRadius:'0'
        },
        formDiv:{
            width:'100%',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'space-around',
            marginTop:'3rem'
        },
        form:{
            width:'100%',
        },
        retourBtn:{
            width:'100%',
        },
    })
}))