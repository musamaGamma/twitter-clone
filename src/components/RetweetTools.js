import React from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Button } from '@material-ui/core'
import {Repeat, Edit} from "@material-ui/icons"



const RetweetTools = ({setTools, tools, setRetweet}) => {
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
        <Drawer  className={styles.retweetTools} vairant="temporary" anchor="bottom" open={tools} onClick={()=> setTools(false)}>
        <List>
          <ListItem style={{display: "flex", justifyContent: "center"}}>
            <span style={{width: "40px", height: "6px", backgroundColor: "rgb(235, 238, 240)", borderRadius: "9px"}}></span>
          </ListItem>
            <ListItem onClick={()=> setRetweet(true)}>
              <ListItemIcon><Repeat /> </ListItemIcon>
              <ListItemText> Retweet</ListItemText>
            </ListItem>
            <ListItem onClick={()=> setRetweet(true)}>
              <ListItemIcon> <Edit /> </ListItemIcon>
              <ListItemText> Quote Tweet </ListItemText>
            </ListItem>

          <ListItem>
            <Button  onClick={()=> setTools(false)} vairant="contained" fullWidth> Cancel</Button>
          </ListItem>
          
        </List>
      </Drawer>
    )
}

export default RetweetTools
