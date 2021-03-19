import {makeStyles} from '@material-ui/core'



export default makeStyles(()=> ({
    header: {
        position: "sticky",
        top: "0",
        borderBottom: "1px solid #eee",
        padding: ".3rem",
        zIndex: "999999",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        background: 'white',

        '& .MuiSvgIcon-root': {
           color: 'rgba(29,161,242,1.00)',
           margin: '0 .4rem',
           marginRight: ".6rem"
        },

        '& .MuiTypography-h1' : {
            fontSize: "1.2rem",
            fontWeight: '800',
            marginTop: ".5rem"
        },
        '& .MuiTypography-body2' : {
            fontSize: ".9rem",
            color: "grey"
        }
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
        '& .MuiButton-root': {
            position: "absolute",
            right: "1rem",
            bottom: "-2.9rem",
            textTransform: "capitalize",
            borderRadius: "9999px",
            borderColor: "#1da1f2",
            color: "#1da1f2",
            fontWeight: "600"
        },

        
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
   
    profileInfo : {
        margin: "1.2rem",
        marginTop: "3rem",
        
        '& .MuiTypography-h1' : {
            fontSize: "1.2rem",
            fontWeight: '800',
            marginTop: ".5rem"
        },
        '& .username' : {
            fontSize: "1rem",
            fontWeight: '400',
            color: "#999999"
        },
    },
    profileInfoName: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "fit-content"
     
          },
          bio: {
              color: "rgb(15, 20, 25) ",
              fontSize: ".9rem"
          },
          follow: {
              marginTop: ".7rem",
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
                   fontWeight: "800",
                   marginRight: ".2rem"
                  }
              }
          },

        profileNav: {
            position: "sticky",
            top: "50.4px",
            paddingTop: ".5rem",
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #eee",
            '& .MuiButtonBase-root': {

                
               
            },
            '& .MuiIconButton-label': {
                fontSize: "1rem",
                color: "rgb(91, 112, 131)",
                fontWeight: "700",
              
                
                
            },
            '& .tweets': {
                borderBottom: "3px solid rgb(29, 161, 242)",
            borderRadius: "0",
            color: "rgb(29, 161, 242)",
            '& .MuiIconButton-label': {
                color: "rgb(29, 161, 242)"
            }
            }

        },
        content: {
           position: "relative",
           height: "40vh"
        },
        loading: {
            position: "absolute",
            left: "50%",
            top: "10%",
            transform: "translateX(-40%) !important",
            color: "rgba(29,161,242,1.00)"
        }
}))