import {makeStyles} from "@material-ui/core"


export default makeStyles(()=> ({
    header: {
        padding: ".7rem 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1rem",
        '& .MuiSvgIcon-root' : {
            fontSize: "2.4rem",
         color: 'rgba(29,161,242,1.00)'
     },
     "& .MuiButton-root": {
        backgroundColor: "rgb(29, 161, 242)",
        color: "white",
        textTransform: "capitalize",
        fontWeight: "600",
        letterSpacing: "1px",
        borderRadius: "9999px",
        boxShadow: "none",
        padding: ".2rem .6rem"
     }
    },
    disabled: {
        backgroundColor: "#8ed0f9",
        opacity: ".7"
    },
    content: {
         display: "grid",
         placeItems: "center",
     
         "& .MuiTypography-h1": {
            fontSize: "1.5rem",
            marignBottom: "1rem",
            fontWeight: "600"
        }
    },
    form: {
        width: "80%",

        "& .MuiTextField-root": {
            display: 'block',
        marginTop: "1.3rem",
      
        },

        "& .Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
             borderColor: "rgb(19, 144, 216) "
            }
        }
        
    },
    nameHelpText: {
      "& .MuiFormHelperText-root": {
          position: "absolute",
          top: "0",
          right: "0"
      }
    },
   
   errorOutline: {
      
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(224, 36, 94) !important"
           }
     
   },
   errorMessage: {
       marginTop: "1rem",
       color: "rgb(224, 36, 94)"
   },
    
    textForm: {

    },
}))