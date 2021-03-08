import React from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Button } from '@material-ui/core'
import { DeleteOutline, PinDropOutlined, Code, PollOutlined } from '@material-ui/icons'

const TweetTools = ({setTools, tools}) => {

    const styles = makeStyles(()=> ({
        tweetTools: {
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
        delete: {
         color: "rgb(224, 36, 94)",
         "& .MuiSvgIcon-root": {
           color: "rgb(224, 36, 94)"
         }
        },
    }))()
    return (
        <Drawer className={styles.tweetTools} vairant="temporary" anchor="bottom" open={tools} onClick={()=> setTools(false)}>
        <List>
          <ListItem style={{display: "flex", justifyContent: "center"}}>
            <span style={{width: "30px", height: "5px", backgroundColor: "grey"}}></span>
          </ListItem>
          <ListItem className={styles.delete}>
          <ListItemIcon><DeleteOutline /></ListItemIcon>
          <ListItemText>Delete</ListItemText>
          </ListItem>
          
          <ListItem>
          <ListItemIcon><PinDropOutlined /></ListItemIcon>
          <ListItemText>Pin to your profile</ListItemText>
          </ListItem>
          <ListItem>
          <ListItemIcon><Code /></ListItemIcon>
          <ListItemText>Embed Tweet</ListItemText>
          </ListItem>
          <ListItem>
          <ListItemIcon><PollOutlined /></ListItemIcon>
          <ListItemText>View Activity</ListItemText>
          </ListItem>

          <ListItem>
            <Button  onClick={()=> setTools(false)} vairant="contained" fullWidth> Cancel</Button>
          </ListItem>
          
        </List>
      </Drawer>
    )
}

export default TweetTools
