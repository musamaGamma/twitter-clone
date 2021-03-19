import React, {useEffect} from 'react'
import { Typography, IconButton, Avatar, Button, CircularProgress } from '@material-ui/core'
import { ArrowBack, Image } from '@material-ui/icons'
import useStyles from './ProfilePageStyles' 
import FooterNav from '../components/FooterNav'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { getProfileTweets } from '../actions/tweetAction'
import Tweet from '../components/Tweet'


const ProfilePage = ({history}) => {
    const styles = useStyles()
    const userLogin = useSelector(state => state.userLogin)
    const profileInfo = useSelector(state => state.profileInfo)
    const { profile} = profileInfo
    const {userInfo} = userLogin
   
    const profileTweetsList = useSelector(state => state.profileTweetsList)
    const {loading, tweets, error} = profileTweetsList

    const dispatch = useDispatch()
    useEffect(()=> {
     if(!userInfo) {
         history.push("/login")
     }
    
     dispatch(getProfileTweets())
     
    }, [])
    return (
        <div>
            <div className={styles.header}>
                <Link to="/">
                <IconButton>
                 <ArrowBack />
                 </IconButton>
                </Link>
                
                    
                <div className="info">
    <Typography variant="h1">{profile.name}</Typography>
                <Typography variant="body2">999 tweets</Typography>
                </div>
                
            </div>
            <div className={styles.coverImage}>
            {profile.coverImage && ( <img src={profile.coverImage} alt="cover "/>)}
             <div className={styles.avatarContainer}>
             <Avatar />
             </div>
              
                 <Link to="/edit-profile">
               <Button variant="outlined">Edit profile</Button>
               </Link>
            </div>
            <div className={styles.profileInfo}>
                <div className={styles.profileInfoName}>
    <Typography variant="h1">{profile.name}</Typography>
    <Typography variant="body2" className="username">@{profile.username}</Typography>
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
    <div className={styles.content}>
    {loading? <CircularProgress size="1.6rem" thickness={4}   className={styles.loading}/> : error? <Typography>{error}</Typography> : (
        tweets?.map(tweet => (<Tweet key={tweet.id} id={tweet._id} name={tweet.name} username={tweet.username} time={tweet.createdAt} owner={tweet.user} profileImage={tweet.profileImage} text={tweet.text} likes={tweet.likes}/>))
    )}
    </div>
           <FooterNav />
        </div>
    )
}

export default ProfilePage
