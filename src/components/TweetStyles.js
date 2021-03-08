import {makeStyles} from '@material-ui/core'


export default makeStyles(()=> ({
    tweet: {
        border: "1px solid #eee",
        padding: "1rem",
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
            fontSize: "1.2rem",
            margin: "0 .5rem"
        }
    },
    tweetText: {
    margin: ".1rem 0"
    },
    tweetIcons: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
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
        
    }
}))