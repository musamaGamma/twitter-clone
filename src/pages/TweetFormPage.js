import React, { useState } from 'react'
import { Avatar, IconButton, Button, Divider } from '@material-ui/core'
import { ArrowBack,   Schedule,  PollOutlined,  ImageOutlined, GifOutlined } from '@material-ui/icons'
import useStyles from './TweetFormPageStyles'
import TweetLimit from '../components/TweetLimit'
import { createTweet } from '../actions/tweetAction'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const TweetFormPage = ({history}) => {
   const [tweet, setTweet] = useState("")
    const styles = useStyles()

    const goBack = () => {
      history.goBack()
    }
    const {success} = useSelector(state => state.tweetCreate)

   
    const disable = tweet.length < 1 || tweet.length> 280
    
    const dispatch = useDispatch()
    const postTweet = () => {
        
        dispatch(createTweet(tweet))
    }
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(()=> {
     if(!userInfo) {
         history.push("/login")
     }
    }, [])

    useEffect(()=> {
        if(success) {
            history.push("/")
        }
    }, [history, success])
    return (
        <div>
            <div className={styles.header}>
               
                
                <IconButton onClick={goBack}> <ArrowBack /> </IconButton>
               
                <Button variant="contained" disabled={disable} className={disable && styles.disabled} onClick={postTweet}>Tweet</Button>
                
            </div>
            <Divider />
            <div className={styles.content}>
                <div style={{flex: ".15"}}>
                <Avatar />
                </div>
                <div style={{flex: ".85"}}>
                
                
                <textarea   className={styles.textarea} placeholder="What's happening?" value={tweet} onChange={(e)=> setTweet(e.target.value)}></textarea>
                <div className={styles.tweetRow}>
                <ul className={styles.tweetIcons} >
                    <li className={styles.tweetImage}>  <label htmlFor="file_" ><IconButton><ImageOutlined /></IconButton> </label><input id="file_" type="file"/></li>
                    <li> <IconButton><GifOutlined  /></IconButton></li>
                    <li><IconButton><PollOutlined /></IconButton> </li>
                    <li><IconButton><Schedule /></IconButton> </li>
                </ul>
                <TweetLimit value={tweet.length}/>
                </div>
                </div>
            
            </div>
    
           
        </div>
    )
}

export default TweetFormPage
