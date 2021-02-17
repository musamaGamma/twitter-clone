import {makeStyles} from '@material-ui/core'


export default makeStyles(()=> ({
    Nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        '& .MuiSvgIcon-root' : {
            color: 'rgba(29,161,242,1.00)'
        }
    }
}))