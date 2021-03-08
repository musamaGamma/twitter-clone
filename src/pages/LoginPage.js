import React from 'react'
import { Twitter } from '@material-ui/icons'
import { TextField, Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './LoginPageStyles'
import { useEffect } from 'react'
const LoginPage = () => {
    const styles = useStyles()
    useEffect(()=> {
        document.title = "Login to Twitter"
    })
    return (
        <div className={styles.loginPage}>
            <div className={styles.logo}>
            <Twitter/>
            </div>
            <form className={styles.form}>
                <Typography className={styles.header} variant="h1">Login to Twitter</Typography>
                <TextField required type="email"  fullWidth className={styles.input} variant="outlined" label="Email"/>
                <TextField required type="password" fullWidth className={styles.input} variant="outlined" label="Password"/>
                <Button variant="contained" color="primary" fullWidth className={styles.button}>Login</Button>
            </form>
            <Link to="signup">Sign up for Twitter</Link>
        </div>
    )
}

export default LoginPage
