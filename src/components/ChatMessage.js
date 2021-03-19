import React from 'react'
import { Avatar, Typography } from '@material-ui/core'
import useStyles from "./ChatMessageStyles"

const ChatMessage = () => {
    const styles = useStyles()

    return (
        <div className={styles.root}>
            <div className={styles.avatarContainer}>
                <Avatar />
            </div>
            <div className={styles.content}>
                <div className={styles.userInfo}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Typography variant="h3">name</Typography>
                        <Typography variant="h5">@username</Typography>
                    </div>
                    <Typography variant="small">1h</Typography>
                </div>
                <div className={styles.message}>
                    hello world!
                </div>
            </div>
        </div>
    )
}

export default ChatMessage
