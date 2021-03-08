import React from 'react'
import { Typography, IconButton, Avatar, Button } from '@material-ui/core'
import { ArrowBack, Image } from '@material-ui/icons'
import useStyles from './ProfilePageStyles' 
import FooterNav from '../components/FooterNav'
import { Link } from 'react-router-dom'
import dayjs from "dayjs"


const ProfilePage = () => {
    const styles = useStyles()
    return (
        <div>
            <div className={styles.header}>
                <Link to="/">
                <IconButton>
                 <ArrowBack />
                 </IconButton>
                </Link>
                
                    
                <div className="info">
                <Typography variant="h1">name</Typography>
                <Typography variant="body2">999 tweets</Typography>
                </div>
                
            </div>
            <div className={styles.coverImage}>
                <img src="" alt="cover image"/>
             <div className={styles.avatarContainer}>
             <Avatar />
             </div>
              

               <Button variant="outlined">Edit profile</Button>
            </div>
            <div className={styles.profileInfo}>
                <div className={styles.profileInfoName}>
                <Typography variant="h1">username</Typography>
            <Typography variant="body2" className="username">@username</Typography>
                </div>
           
    <Typography variant="body2" className={styles.bio}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, nemo quaerat. Corrupti ducimus odit totam!</Typography>
    <div className={styles.follow}>
        <Typography variant="body2"><Typography variant="h2">0</Typography>  Following</Typography>
        <Typography variant="body2"><Typography variant="h2">0</Typography>  Followers</Typography>
    </div>
            </div>
    <div className={styles.profileNav}>
    <IconButton className="tweets">Tweets</IconButton>
    <IconButton>Tweets & replies</IconButton>
    <IconButton>Media</IconButton>
    <IconButton>Likes</IconButton>
    </div>
    <div className={styles.content}></div>
           <FooterNav />
        </div>
    )
}

export default ProfilePage
