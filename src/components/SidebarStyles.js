import {makeStyles} from '@material-ui/core'


export default makeStyles(()=> ({
    sidebar: {
       
        '& .MuiPaper-root' : {
            width: '80%',
            
        }
       
    },
    profile: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "1.5rem",
           '& .MuiAvatar-root' : {
           width: "3.5rem",
           height: "3.5rem",
         
           marginBottom: ".5rem"
           },
        '& .MuiTypography-h2' : {
            fontSize: "1rem",
            margin: ".3rem 0"
        }
    },
    list: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "1rem",
        paddingLeft: ".5rem"
    }
}))