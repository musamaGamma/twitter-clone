import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import FooterNav from '../components/FooterNav'
import useStyles from './HomeStyles'
import Tweet from '../components/Tweet'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTweets } from '../actions/tweetAction'
import { CircularProgress, Typography } from '@material-ui/core'
import {CREATE_TWEET_RESET} from "../actions/types/postTypes"
import { logout } from '../actions/userActions'

const Home = ({history}) => {
    const [open, isOpen] = useState(false)
    const toggleNav = () => {
        isOpen(!open)
    }
    const styles = useStyles()
     
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
  

    
    const {loading,tweets, error} = useSelector(state => state.tweetsList)
    const dispatch = useDispatch()
   
    const {success: successDelete} = useSelector(state => state.tweetDelete)
    const {success: successLike} = useSelector(state => state.tweetLikes)
    
    useEffect(()=> {
        document.title = "Home / Twitter"
       
        if(!userInfo) {
          history.push("/login")
        }
       
        dispatch(getTweets())
        dispatch({type: CREATE_TWEET_RESET})
    }, [userInfo, dispatch, history, successDelete, successLike])
    return (
        
        <div className={styles.home}>
            <NavBar toggleNav={toggleNav}/>
            <Sidebar open={open} toggleNav={toggleNav}/>
          
    {loading? <CircularProgress size="1.6rem" thickness={4}   className={styles.loading}/> : error? <Typography>{error}</Typography> : (
        tweets?.map(tweet => (<Tweet key={tweet.id} id={tweet._id} name={tweet.name} username={tweet.username} time={tweet.createdAt} owner={tweet.user} profileImage={tweet.profileImage} text={tweet.text} likes={tweet.likes}/>))
    )}
           
           <div className={styles.empty}></div>
            <FooterNav />
        </div>
    )
}

export default Home
