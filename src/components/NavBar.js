import React from 'react'
import useStyles from './NavbarStyles'
import {IconButton} from '@material-ui/core'
import {Twitter, Menu, Star} from '@material-ui/icons'

const NavBar = ({toggleNav}) => {
    const styles = useStyles()
    return (
        <div className={styles.Nav}>
            <IconButton onClick={toggleNav}>
                <Menu style={{fontSize: "2rem"}}/>
            </IconButton>
            <IconButton>
                <Twitter />
            </IconButton>
            <IconButton>
                <Star />
            </IconButton>
        </div>
    )
}

export default NavBar
