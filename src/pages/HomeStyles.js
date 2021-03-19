import {makeStyles} from '@material-ui/core'

export default makeStyles(()=> ({
    home: {
     margin: "0",
     display: "inline-block",
     width: "100%",
     overflowY: "scroll",
     height: "fit-content"
    },
    empty: {
        height: "5rem"
    },
    loading: {
        position: "absolute",
        left: "50%",
        top: "15%",
        transform: "translateX(-40%) !important",
        color: "rgba(29,161,242,1.00)"
    }
   
   
}))