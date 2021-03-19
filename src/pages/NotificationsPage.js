import React, { useState, useEffect } from 'react'
import FooterNav from '../components/FooterNav'
import { Avatar, Typography, Divider } from '@material-ui/core'
import { SettingsOutlined } from '@material-ui/icons'
import useStyles from './NotifcationsPageStyles'
import NotificationMessage from '../components/NotificationMessage'
import { useSelector, useDispatch } from 'react-redux'
import { NOTICATIONS_READ } from '../actions/types/notificationTypes'

const NotificationsPage = ({history}) => {
     


    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const notifications = useSelector(state => state.notifications)
    const {count} = notifications
   
    const dispatch = useDispatch()
    
    useEffect(()=> {
        if(!userInfo) {
            history.push("/login")
        }
        document.title = "Notifications /Twitter"
        
        dispatch({type: NOTICATIONS_READ})
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
            <FooterNav notifCount={count}/>
        </div>
    )
}

export default NotificationsPage
