import {makeStyles} from '@material-ui/core'


export default makeStyles(()=> ({
    sidebar: {
       
        '& .MuiPaper-root' : {
            width: '65%',
            
        }
       
    },
    header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& .MuiTypography-h1": {
        fontSize: "1.2rem",
        marginLeft: ".5rem",
        fontWeight: "700"
    },
    "& .MuiSvgIcon-root": {
        color: "rgba(29,161,242,1.00)"
    }
    },
    profile: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "1.5rem",
           '& .MuiAvatar-root' : {
           width: "2.5rem",
           height: "2.5rem",
         
           marginBottom: ".7rem"
           },
        '& .MuiTypography-h2' : {
            fontSize: ".9rem",
            margin: ".1rem 0",
            fontWeight: "600"
        },
        "& .MuiTypography-root": {
            color: "black"
        }
    },
    list: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "1rem",
        paddingLeft: ".5rem"
    },
    link: {
        color: "black !important",
        "&:visited": {
            color: "black"
        },
        "& .MuiTypography-root": {
            color: "black"
        }
    },
    follow: {
        marginLeft: "1.7rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "fit-content",
        
        '& .MuiTypography-body2': {
            marginRight: ".9rem",
            display: "flex",
            alignItems: "center",
            fontSize: "1rem",
            fontWeight: "200",
            color: "black",
            '& .MuiTypography-h2': {
             fontSize: "1.2rem",
             fontWeight: "600",
             marginRight: ".2rem"
            }
        }
    },
    logout: {
        marginTop: ".8rem",
        marginLeft: "1.7rem",
        fontSize: "1rem"
    }
}))