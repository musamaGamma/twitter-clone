import React from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Button } from '@material-ui/core'
import { DeleteOutline, PinDropOutlined, Code, PollOutlined } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTweet } from '../actions/tweetAction'

const TweetTools = ({id, setTools, tools, owner}) => {

  const profileInfo = useSelector(state => state.profileInfo)
  const {profile} = profileInfo

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
    
   const  dispatch = useDispatch()
    const handleDelete = () => {
      dispatch(deleteTweet(id))
    }
    return (
        <Drawer className={styles.tweetTools} vairant="temporary" anchor="bottom" open={tools} onClick={()=> setTools(false)}>
        <List>
          <ListItem style={{display: "flex", justifyContent: "center"}}>
            <span style={{width: "35px", height: "6px", backgroundColor: "rgb(235, 238, 240)", borderRadius: "9999px"}}></span>
          </ListItem>
          {profile && profile._id === owner && ( <ListItem className={styles.delete} onClick={handleDelete}>
          <ListItemIcon><DeleteOutline /></ListItemIcon>
          <ListItemText>Delete</ListItemText>
          </ListItem>)}
         
          
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
