import React, { useEffect } from 'react'
import FooterNav from '../components/FooterNav'
import {makeStyles, Avatar, Typography} from "@material-ui/core"
import { Message } from '@material-ui/icons'
import ChatMessage from '../components/ChatMessage'

const MessagesPage = () => {
    const styles = makeStyles(()=> ({
     


        header: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: ".7rem 1rem",
            paddingBottom: "1rem",
            borderBottom: "1px solid #eee"
    
           
        },
      
        headerInfo: {
            display: "flex",
            
            justifyContent: "space-between",
            alignItems: "center",
            "& .MuiTypography-h2": {
                fontSize: "1.4rem",
                fontWeight: "600"
            },
            "& .MuiAvatar-root": {
                objectFit: "contain",
                width: "1.8rem",
                height: "1.8rem",
                marginRight: "1rem"
            }
        },
      
    }))() 


    useEffect(()=> {
        document.title = "Messages /Twitter"
       }, [])
    return (
        <div>
             <div className={styles.header}>
                <div className={styles.headerInfo}>
                <Avatar/> 
                <Typography variant="h2">Messages</Typography>
                </div>
                <div>
                    <ChatMessage />
                </div>
              
            </div>
            <FooterNav />
        </div>
    )
}

export default MessagesPage
