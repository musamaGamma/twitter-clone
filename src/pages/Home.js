import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import FooterNav from '../components/FooterNav'
import useStyles from './HomeStyles'
import Tweet from '../components/Tweet'

import { useEffect } from 'react'

const Home = () => {
    const [open, isOpen] = useState(false)
    const toggleNav = () => {
        isOpen(!open)
    }
    const styles = useStyles()

    useEffect(()=> {
        document.title = "Home / Twitter"
    }, [])
    return (
        
        <div className={styles.home}>
            <NavBar toggleNav={toggleNav}/>
            <Sidebar open={open} toggleNav={toggleNav}/>
            <Tweet/>
            <Tweet/>
           
            <FooterNav />
        </div>
    )
}

export default Home
