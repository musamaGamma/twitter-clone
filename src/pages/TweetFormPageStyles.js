import {makeStyles} from '@material-ui/core'

export default makeStyles(()=> ({
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: ".2rem 1rem ",
      

        '& .MuiButton-root': {
            backgroundColor: "rgb(29, 161, 242)",
            color: "white",
            textTransform: "capitalize",
            fontWeight: "600",
            letterSpacing: "1px",
            borderRadius: "9999px",
            boxShadow: "none",
            padding: ".24rem .7rem"
            
        },

        '& .MuiSvgIcon-root': {
        color: "rgba(29,161,242,1.00)"
        }
    },

    content: {
        display:"flex",
        justifyContent: "space-between",
        margin: ".5rem"
    },
    textarea: {
        width: "90%",
        height: "7rem",
        resize: "none",
        border: "none",
        padding: ".7rem",
        borderBottom: "1px solid #eee",

        "&:focus" : {
            outlineWidth: "0"
        }
    },
    tweetImage: {
      '& input[type="file"]': {
          opacity: "0",
          width: "0"
      },
      '& label': {
          display: "inline-block",
          cursor: "pointer"
      }
    },
    tweetIcons: {
        display: "flex",
        alignItems: "center",
        listStyle: "none",
       "& .MuiIconButton-root": {
        color: "rgba(29,161,242,1.00)",
        margin: "0"
       
       } 
    },
    disabled: {
        backgroundColor: "#8ed0f9",
        opacity: ".7"
    },
    tweetRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
}))