import {makeStyles} from '@material-ui/core';

export default makeStyles((theme) => ({
    circularProgressDiv:{
        width:'100%',
        height:'85vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    container:{
        width:'80%',
        minHeight:'85vh',
        margin:'67px auto 0',
        padding:'1rem',
        display:'flex',
    },
    sideBox:{
        width:'23%',
        minHeight:'100%',
        border:'1px solid #eee',
        marginRight:'.2rem',
        padding:'1rem 0',
    },
    userAvatar:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    avatar:{
        height:'100px',
        width:'100px',
        fontSize:'2rem',
        backgroundColor:'#000',
        color:'#fff',
        textTransform:'uppercase'
    },
    name:{
        fontSize:'1rem',
        fontWeight:'bold',
        marginTop:'.8rem',
    },
    infoNPosts:{
        display:'flex',
        flexDirection:'column',
        alignItems:'start',
        padding:'1rem',
        marginTop:'2rem'
    },
    sideBtn:{
        width:'100%',
        margin:'.5rem 0',
        padding:'.3rem',
        fontSize:'1rem',
        border:'1px solid #eee',
        cursor:'pointer',
        '&:hover':{
            backgroundColor:'#444',
            color:'#fff' 
        },
    },
    active:{
       backgroundColor:'#444',
       color:'#fff' 
    },
    mainBox:{
        width:'77%',
        minHeight:'100%',
        border:'1px solid #eee',
        padding:'1rem 0',
    },
    title:{
        fontSize:'1.2rem',
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:'2rem'
    },
    valueBox:{
        width:'80%',
        minHeight:'70%',
        margin:'auto',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-start',
    },
    noPubDiv:{
        width:'100%',
        height:'200px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    infoField:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        width:'55%',
        padding:'1rem',
        margin:'1rem 0'
    },
    [theme.breakpoints.down('md')] : ({
        sideBox:{
            width:'30%',
        },
        mainBox:{
            width:'70%',
        },
    }),
    [theme.breakpoints.down('sm')] : ({
        container:{
            width:'100%',
            padding:'0',
            flexDirection:'column',
            margin:'45px auto 0',
        },
        sideBox:{
            width:'100%',
            minHeight:'50vh',
            marginBottom:'.2rem',
        },
        name:{
            fontSize:'.9rem',
        },
        sideBtn:{
            fontSize:'.9rem',   
        },
        mainBox:{
            width:'100%',
            minHeight:'50vh',
        },
        title:{
            fontSize:'.9rem',
        },
        valueBox:{
            width:'100%',
        },
        infoField:{
            width:'100%',
            margin:'0',
            '&>*':{
                fontSize:'.8rem',
            }
        },
    })
}))