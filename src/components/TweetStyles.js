import {makeStyles} from '@material-ui/core'


export default makeStyles(()=> ({
    tweet: {
        border: "1px solid #eee",
        padding: "1rem",
        margin: "0"
    },
    tweetInfo: {
           display: "flex",
           justifyContent: "space-between",
           alignItems: "top"
    },
    userInfo : {
        display: "flex",
        alignItems: "flex-start",

        '& .MuiTypography-h2' : {
            fontSize: "1.2rem",
            margin: "0 .5rem"
        }
    },
    tweetText: {

    },
    tweetIcons: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }
}))