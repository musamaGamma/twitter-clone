import {makeStyles} from '@material-ui/core'

export default makeStyles(()=> ({
    footer: {
       
        position: 'fixed',
        bottom: "0",
        zIndex: "10",
        width: '100%',
        margin: "0"
    },
    navIcons: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }
}))