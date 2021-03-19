import {makeStyles} from '@material-ui/core'

export default makeStyles(()=> ({
    footer: {
       
        position: 'fixed',
        bottom: "0",
        zIndex: "10",
        width: '100%',
        margin: "0",
        backgroundColor: "white"
    },
    navIcons: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        '& .MuiSvgIcon-root': {
            width: "2.8rem",
            fontSize: "2rem",
            fill: "rgb(91, 112, 131)"
        },
        
    },
    active: {
        fill: "rgba(29,161,242,1.00) !important",
          
       
    },
    badge: {
        display: "flex",
        alignItems: "center",

        "& .MuiBadge-badge": {
            background: "rgba(29,161,242,1.00)",
            color: "white",
            minWidth: "6px",
            height: "13px",
            top: "5px",
            right: "10px"
        }
       
    },
    tweet: {
        borderRadius: "50%",
        color: "white",
        backgroundColor: "rgba(29,161,242,1.00)",
        position: "absolute",
        bottom: "4.9rem",
        right: "1.5rem",
        boxShadow: "0px 1px 5px rgba(0,0,0,0.2), 0px -1px 5px rgba(0,0,0,0.2)"
    },
}))