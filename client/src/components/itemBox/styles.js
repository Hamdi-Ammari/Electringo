import {makeStyles} from '@material-ui/core';

export default makeStyles((theme) => ({
    box:{
        width:'500px',
        marginBottom:'.5rem',
        border:'1px solid lightgray',
        backgroundColor:'#fff',
        borderRadius:'.3rem',
        position:'relative'
    },
    header:{
        padding:'.2rem 1rem 1rem',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
    },
    nameBox:{
        display:'flex',
        alignItems:'center',
    },
    headerLeftCorner:{
        marginTop:'.5rem',
    },
    name:{
        fontSize:'.95rem',
        fontWeight:'bold',
    },
    cursorName:{
        cursor:'pointer'
    },
    timeAndAdresseDiv:{
        display:'flex',
        alignItems:'center',
    },
    timeAdresseText:{
        color:'#888',
        fontSize:'.7rem',
    },
    iconBtn:{
        padding:'.2rem',
        cursor:'pointer',
    },
    sideMenu:{
        width:'250px',
        padding:'1rem .8rem',
        position:'absolute',
        right:'20px',
        top:'44px',
        zIndex:'5',
        borderRadius:'.3rem',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    noSideMenu:{
        display:'none'
    },
    sideMenuItem:{
        width:'100%',
        borderRadius:'none',
        padding:'.4rem',
        margin:'.2rem 0',
        textTransform:'lowercase',
    },
    sideMenuItemText:{
        fontWeight:'bold'
    },
    description:{
        padding:'.5rem',
    },
    title:{
        fontSize:'.85rem',
        fontWeight:'bold',
    },
    parag:{
        fontSize:'.85rem',
    },
    photoDiv:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
    },
    switchBtn:{
        position:'absolute',
        top:'50%',
        width:'20px',
        height:'20px',
        backgroundColor:'#F5F5F2',
        borderRadius:'50%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        cursor:'pointer'
    },
    nextBtn:{
        right:'5px',
    },
    prevBtn:{
        left:'5px',
        transform:'rotate(180deg)'
    },
    noBtn:{
        display:'none'
    },
    arrow:{
        fontSize:'.9rem',
        color:'rgba(0,0,0,.4)'
    },
    thePhoto:{
        width:'100%',
        objectFit:'contain',
    },
    footer:{
        padding:'.2rem .1rem .5rem',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    pricePaper:{
        minWidth:'200px',
        textAlign:'center',
        padding:'.3rem',
    },
    price:{
        fontWeight:'bold',
        fontSize:'1rem',
    },
    likeCommentBigCont:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        padding:'0 .5rem'
    },
    likeCommentContainer:{
        width:'50%',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        padding:'.2rem .5rem',
    },
    likeCommentBox:{
        display:'flex',
        alignItems:'center',
    },
    footerIcon:{
        cursor:'pointer',
        fontSize:'1.6rem',
        color:'#666'
    },
    likeCommentText:{
        fontSize:'.8rem',
        fontWeight:'bold',
        color:'#666'
    },
    iconsDiv:{
        width:'120px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'1rem',
    },
    textShowOff:{
        display:'none'
    },
    commentForm:{
        width:'98%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
    },
    commentInput:{
        width:'95%',
        padding:'.6rem 1rem',
        border:'1px solid lightgray',
        borderRadius:'5rem',
    },
    addCommentIcon:{
        color:'#18A0FB',
        cursor:'pointer'
    },
    allCommentsDiv:{
        height:'60px',
        overflow:'auto',
        marginTop:'5px'
    },
    postComment:{
        padding:'0 1rem',
        margin:'.5rem 0',
    },
    commentOwner:{
        fontSize:'.85rem',
        fontWeight:'bold',
        cursor:'pointer',
    },
    commentValue:{
        fontSize:'.85rem',
    },
    [theme.breakpoints.down('sm')] : ({
        box:{
            overflowY:'hidden',
            width:'99%',
        },
        name:{
            fontSize:'.9rem',
            fontWeight:'bold'
        },
    })
}))