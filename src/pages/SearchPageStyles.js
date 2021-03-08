import { makeStyles} from "@material-ui/core"

export default makeStyles(()=> ({
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: ".6rem .5rem",
        borderBottom: "1px solid #eee",
        "& .MuiAvatar-root": {
            width: "2rem",
            height: "2rem"
        }
     
    },
    searchBar: {
        display: "flex",
        alignItems: "center", 
        background: "rgb(235, 238, 240)",
        borderRadius: "9999px",
        padding: ".2rem 1rem",
        flex: ".85",
        "& .MuiSvgIcon-root": {
            color: "grey"
        },
        "& input": {
            border: "none",
            background: "rgb(235, 238, 240)",
            outlineWidth: "0",
            fontWeight: "500",
            marginLeft: ".3rem",
            color: "grey"
        }
    },
    activeSearch: {
        display: "flex",
        alignItems: "center", 
        background: "white",
        borderRadius: "9999px",
        padding: ".2rem 1rem",
        flex: ".85",
        border: "1px solid rgba(29,161,242,1.00)",
        "& .MuiSvgIcon-root": {
            color: "grey"
        },
        "& input": {
            border: "none",
            background: "white",
            outlineWidth: "0",
            fontWeight: "500",
            marginLeft: ".3rem",
           
        }
    }  
}))