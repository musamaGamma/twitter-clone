import {makeStyles} from '@material-ui/core'


export default makeStyles((theme)=> ({
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: ".7rem 1rem",

       
    },
    headerIcon: {
        
            color: "rgba(29,161,242,1.00)"
        
    },
    headerInfo: {
        display: "flex",
        
        justifyContent: "space-between",
        alignItems: "center",
        "& .MuiTypography-h2": {
            fontSize: "1.4rem",
            fontWeight: "600"
        },
        "& .MuiAvatar-root": {
            objectFit: "contain",
            width: "1.8rem",
            height: "1.8rem",
            marginRight: "1rem"
        }
    },
    nav: {
        marginTop: "1rem",
        display: "flex",
        alignItems: "center",
        "& .MuiTypography-h3": {
            flex: ".5",
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "600",
            color: "rgb(91, 112, 131)",
            paddingBottom: "1rem"
            
        },
        "& .active": {
            color: "rgba(29,161,242,1.00)",
            borderBottom: "2px solid rgba(29,161,242,1.00)",
            
        }
    },
    
}))