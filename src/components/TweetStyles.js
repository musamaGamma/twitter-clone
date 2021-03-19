import {makeStyles} from '@material-ui/core'


export default makeStyles(()=> ({
    tweet: {
        border: "1px solid #eee",
        padding: ".1rem",
        margin: "0",
        display: "flex",
        alignItems: "flex-start",

        "& .MuiAvatar-root": {
            marginTop: "14px",
        
        }
       
    },
    tweetInfo: {
           display: "flex",
           justifyContent: "space-between",
           alignItems: "center",
           marginBottom: ".1rem"
    },
    userInfo : {
        display: "flex",
        alignItems: "center",

        '& .MuiTypography-h2' : {
            fontSize: "clamp(.7rem, 1rem, 1.12rem)",
            margin: "0",
            marginRight: ".5rem",
            whiteSpace: "nowrap",
            width: "fit-content",
            textAlign: "left",
            textTransform: "capitalize"
        },
        "& .MuiTypography-body2": {
            whiteSpace: "nowrap",
            width: "fit-content",
            overflowX: "hidden",
            color: "#999999"
        }
    },
    tweetText: {
    margin: ".1rem 0"
    },
    avatarContainer: {
     margin: "0rem 1rem"
    },
    tweetContent: {
//  width: "80%"
width: "21rem"
    },
    tweetIcons: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "4rem"
    },
    
    delete: {
        color: "rgb(224, 36, 94)",
        "& .MuiSvgIcon-root": {
            color: "rgb(224, 36, 94)"
        }
    },
    retweet: {
        "& .MuiSvgIcon-root": {
            color: "rgb(23, 191, 99)"
        }
        
    },
    like: {
        "& .MuiSvgIcon-root": {
            color: "rgb(224, 36, 94)"
        }
        
    },
    likeCount: {
        fontSize: "1.2rem",
        marginLeft: ".2rem"
    }
}))