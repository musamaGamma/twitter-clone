import React, { useState, useEffect } from 'react'
import FooterNav from '../components/FooterNav'
import { Avatar, Typography, Divider } from '@material-ui/core'
import { SettingsOutlined } from '@material-ui/icons'
import useStyles from './NotifcationsPageStyles'
import NotificationMessage from '../components/NotificationMessage'

const NotificationsPage = () => {
     

    useEffect(()=> {
        document.title = "Notifications /Twitter"
       }, [])
    const styles = useStyles()
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.headerInfo}>
                <Avatar/> 
                <Typography variant="h2">Notifications</Typography>
                </div>
                
                <SettingsOutlined  className={styles.headerIcon}/>
            </div>
            <div className={styles.nav}>
                <Typography variant="h3" className="active">All</Typography>
                <Typography variant="h3">Mentions</Typography>
            </div>
            <Divider />
            <div>
                <NotificationMessage />
            </div>
            <FooterNav/>
        </div>
    )
}

export default NotificationsPage
