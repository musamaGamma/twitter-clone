import React from 'react'
import useStyles from './SidebarStyles'
import { Drawer, List, ListItem, Divider, Avatar, Typography, ListItemIcon, ListItemText, IconButton } from '@material-ui/core'
import { Close, PermIdentity, CloudCircleRounded, ListAlt, Comment, BookmarkBorder } from '@material-ui/icons'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProfileInfo } from '../actions/profileActions'
import { logout } from '../actions/userActions'

const Sidebar = ({open, toggleNav, profile}) => {

    const profileInfo = useSelector(state => state.profileInfo)
    
   
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
    
    const dispatch = useDispatch()
    const history = useHistory()
    const handleLogout = () => {
        dispatch(logout())
        history.push("/login")
    }
   
    return (
        <Drawer className={styles.sidebar} onClick={toggleNav}  
        variant="temporary" anchor="left" open={open}>
            <div className={styles.header}><Typography variant="h1">Account info</Typography> <IconButton><Close /></IconButton></div>
            <Divider />
            <div className={styles.profile}> 
            <Link to="/profile" className={styles.link}>
            <Avatar src={profile?.profileImage}/>
            
    <Typography variant="h2">{profile?.name}</Typography>
    <Typography variant="p">@{profile?.username}</Typography>
            </Link>
            </div>
            
            <div className={styles.follow}>
        <Typography variant="body2"><Typography variant="h2">0</Typography>  Following</Typography>
        <Typography variant="body2"><Typography variant="h2">0</Typography>  Followers</Typography>
    </div>
     <List className={styles.list}>
       {itemsList.map(({text, icon}, i)=> (<ListItem key={i}>

       
<ListItemIcon>{icon}</ListItemIcon>
<ListItemText>{text}</ListItemText>
</ListItem>
       ))}
     </List>
     <Divider />
    <Typography variant="body2" onClick={handleLogout} className={styles.logout}>Log out</Typography>
        </Drawer>
    )
}

export default Sidebar
