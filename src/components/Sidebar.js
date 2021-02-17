import React from 'react'
import useStyles from './SidebarStyles'
import { Drawer, List, ListItem, Divider, Avatar, Typography, ListItemIcon, ListItemText } from '@material-ui/core'
import { Close, PermIdentity, CloudCircleRounded, ListAlt, Comment, BookmarkBorder } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const Sidebar = ({open, toggleNav}) => {
    const styles = useStyles()
    console.log({open})
    const itemsList = [
        {
            text: "Profile",
            icon: <PermIdentity />
            
        },
        {
            text: "Lists",
            icon: <ListAlt />
            
        },
        {
            text: "Topics",
            icon: <Comment />
            
        },
        {
            text: "Bookmarks",
            icon: <BookmarkBorder />
            
        },
        {
            text: "Moments",
            icon: <CloudCircleRounded />
            
        }
    ]
    return (
        <Drawer className={styles.sidebar} onClick={toggleNav}  classes={styles.sidebar}
        variant="temporary" anchor="left" open={open}>
            <div className={styles.profile}> 
            <Avatar />
            <Typography variant="h2">Name</Typography>
            <Typography variant="p">@username</Typography>
            </div>
            
            <Divider />
     <List className={styles.list}>
       {itemsList.map(({text, icon}, i)=> (<ListItem key={i}>

       
<ListItemIcon>{icon}</ListItemIcon>
<ListItemText>{text}</ListItemText>
</ListItem>
       ))}
     </List>
     <Divider />
        </Drawer>
    )
}

export default Sidebar
