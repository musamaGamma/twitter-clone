import React from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Button } from '@material-ui/core'



const RetweetTools = ({setTools, tools}) => {
    const styles = makeStyles(()=> ({
        retweetTools: {
            '& .MuiPaper-root' : {
            
                borderTopRightRadius: "29px",
                borderTopLeftRadius: "29px"
            },
    
            '& .MuiButtonBase-root': {
                background: "rgb(235, 238, 240)",
                color: "black",
                borderRadius: "9999px",
                fontWeight: "600",
                textTransform: "capitalize"
            }
          
        },
    }))()
    return (
        <Drawer className={styles.retweetTools} vairant="temporary" anchor="bottom" open={tools} onClick={()=> setTools(false)}>
        <List>
          <ListItem style={{display: "flex", justifyContent: "center"}}>
            <span style={{width: "30px", height: "5px", backgroundColor: "grey"}}></span>
          </ListItem>
         

          <ListItem>
            <Button  onClick={()=> setTools(false)} vairant="contained" fullWidth> Cancel</Button>
          </ListItem>
          
        </List>
      </Drawer>
    )
}

export default RetweetTools
