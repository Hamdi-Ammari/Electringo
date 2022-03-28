import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    navBar:{
        position:'fixed',
        top:'0',
        left:'0',
        zIndex:'9',
        height:'55px',
        width:'100%',
        padding:'0 5rem',
        backgroundColor:'#fff',
        boxShadow:'1px 1px 1px #ddd',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    title:{
        color:'#000',
        textTransform:'uppercase',
        cursor:'pointer',
    },
    iconsDiv:{
        width:'120px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around'
    },
    iconBtn:{
        padding:'.1rem',
        cursor:'pointer',
    },
    icon:{
        fontSize:'1.7rem',
        color:'#000',
    },
    button:{
        border:'none',
        borderRadius:'5px',
        width:'140px',
        padding:'0.4rem',
        backgroundColor:'#18A0FB',
        color:'#fff',
        cursor:'pointer',
        fontSize:'.8rem'
    },
    [theme.breakpoints.down('sm')] : ({
        navBar:{
            height:'55px',
            padding:'0 .5rem 0 .7rem'
        },
        title:{
            fontSize:'1rem',
            fontWeight:'bold',
        },
        iconsDiv:{
            width:'90px',
        },
        icon:{
            width:'1.6rem',
            height:'1.6rem',
        },
        button:{
            width:'90px',
            padding:'0.3rem',
            fontSize:'.7rem'
        },
    }),
}))