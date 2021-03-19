
import {makeStyles} from '@material-ui/core'

export default makeStyles(()=> ({
   root: {
       display: "flex",
       alignItems: "center",
       borderBottom: "1px solid #eee",
       padding: ".6rem 0"
   },
   avatarContainer: {
     margin: "0 1.2rem",
     marginRight: ".5rem"
   },
   content: {
    width: "100%",
    margin: ".1rem 1rem"
   },
   userInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    "& .MuiTypography-h3": {
        fontSize: "1.2rem"
    },
    "& .MuiTypography-h5": {
        fontSize: ".9rem",
        color: "#999999",
        fontWeight: "500",
        marginLeft: ".3rem"
    }
   },
   message: {
       marginTop: ".5rem"
   }
}))