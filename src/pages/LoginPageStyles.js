import {makeStyles} from '@material-ui/core'

export default makeStyles(()=> ({
    loginPage: {
        height: "100vh",
        display: 'flex',
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    logo: {
       marginTop: "1rem",
       width: "80%",
       display: "flex",
       justifyContent: "flex-start",
       '& .MuiSvgIcon-root' : {
           fontSize: "2.4rem",
        color: 'rgba(29,161,242,1.00)'
    }
    },
    form: {
       width: "80%",
       marginTop: "1rem"
    },
    header: {
   fontSize: "2rem",
   fontWeight: "600",
   marginTop: "1rem",
//    marginBottom: "1rem",
   width: "80%",


    },
    input: {
        display: 'block',
        marginTop: "1rem",
        borderColor: "red",
       '& :focus': {
            outlineColor: "red"
       },
    //    "& :first-child": {
    //        marginTop: "2rem"
    //    }
    },
    button: {
        marginTop: "1.5rem",
      borderRadius: "9999px",
      background: 'rgb(29, 161, 242)',
      textTransform: "capitalize",
      fontWeight: "500",
      padding: ".7rem",
      marginBottom: "2rem"
    },
    errorMessage: {
        marginTop: "1rem",
        color: "rgb(224, 36, 94)",
        width: "80%"
    },
    link: {

    }
}))