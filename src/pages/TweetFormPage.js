import React, { useState } from 'react'
import { Avatar, IconButton, Button, Divider } from '@material-ui/core'
import { ArrowBack,   Schedule,  PollOutlined,  ImageOutlined, GifOutlined } from '@material-ui/icons'
import useStyles from './TweetFormPageStyles'
import { Link } from 'react-router-dom'
import TweetLimit from '../components/TweetLimit'

const TweetFormPage = ({history}) => {
   const [tweet, setTweet] = useState("")
    const styles = useStyles()

    const goBack = () => {
      history.goBack()
    }
    console.log(tweet.length)

   
    const disable = tweet.length < 1 || tweet.length> 280
    return (
        <div>
            <div className={styles.header}>
               
                
                <IconButton onClick={goBack}> <ArrowBack /> </IconButton>
               
                <Button variant="contained" disabled={disable} className={disable && styles.disabled}>Tweet</Button>
                
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
