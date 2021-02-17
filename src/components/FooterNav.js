import React from 'react'
import { IconButton } from '@material-ui/core'
import { HomeOutlined, Search,  NotificationsOutlined, MailOutline } from '@material-ui/icons'
import useStyles from './FooterNavStyles'

const FooterNav = () => {
    const styles = useStyles()
    return (
        <footer className={styles.footer}>
            <div className={styles.navIcons}>
            <IconButton>
                <HomeOutlined />
            </IconButton>
            <IconButton>
             <Search />
            </IconButton>
            <IconButton>
           <NotificationsOutlined />
            </IconButton>
            <IconButton>
         <MailOutline />
            </IconButton>
            </div>
           
        </footer>
    )
}

export default FooterNav
