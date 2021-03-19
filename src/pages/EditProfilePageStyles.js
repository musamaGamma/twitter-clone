import { makeStyles } from "@material-ui/core"

export default makeStyles(()=> ({
    header: {
       
        borderBottom: "1px solid #eee",
        padding: ".3rem",
        backgroundColor: "white",
        display: "flex",
         justifyContent: "space-between",
        alignItems: "center",
        background: 'white',

        '& .MuiSvgIcon-root': {
           color: 'rgba(29,161,242,1.00)',
           margin: '0 .4rem',
           marginRight: ".6rem"
        },

        '& .MuiTypography-h2' : {
            fontSize: "1rem",
            fontWeight: '800',
           
        },
        "& .MuiButton-root": {
            borderRadius: "9999px",
            color: "white",
            textTransform: "capitalize",
            background: "rgb(29, 161, 242)",
            fontWeight: "600"
        }
        
    },
    subHeader: {
        display: "flex",
        alignItems: "center"
    },
  
   
    coverImage: {
        " & img" :{ 
           width: "100%",
           height: "141px",
           
        },
        width: "100%",
        height: "141px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        background: "rgba(0, 0, 0, 0.3)",
   
        
       
        "& .MuiAvatar-root": {
            width: "6rem",
            height: "6rem",
        },
        
        
       
    },
    addimgIcon: {
        color: "white",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
       
        '& input[type="file"]': {
            opacity: "0",
            width: "30px",
            height: "25px",
            position: "absolute",
            top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zndex: "9999",

        },
        '& label': {
            display: "inline-block",
            cursor: "pointer",
             
            
        }
    },
    content : {
        display: "grid",
        placeItems: "center",
        marginTop: "5rem",
        
        "& .formTextFieldContainer": {
            width: "80%",
        
            
        },
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
    form: {
        width: "100%",

        

        
        
    },
    avatarContainer: {
        background: "white",
        borderRadius: "50%",
        padding: ".2rem",
        position: "absolute",
        bottom: "0",
        left: "1rem",
        width: "6rem",
        height: "6rem",
                   
        transform: 'translateY(50%)',
        
        
            },
        
}))