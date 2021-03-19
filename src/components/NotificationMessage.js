import React from 'react'
import {makeStyles, Typography} from '@material-ui/core'
import { Twitter } from '@material-ui/icons'

const NotificationMessage = () => {
    const useStyles = makeStyles((theme)=> ({
        notification: {
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: "rgb(235, 238, 240)",
          border: "1px solid #eee",
          animation: `$change 2s linear`,
          animationFillMode: "forwards",
        },
        icon: {
            flex: ".15",
            textAlign: "right",
            marginRight: ".5rem",
        "& .MuiSvgIcon-root": {
            color: "rgba(29,161,242,1.00)",
            fontSize: "1.8rem"
        }
        },
        content: {
            flex: ".85",
            textAlign: "left",
            height: "100%",
            alignItems: "flex-end",
            "& .MuiTypography-body2": {
                fontSize: "1.2rem"
            }
        },
        
          "@keyframes change": {
              "0%": {
                  backgroundColor: "rgb(235, 238, 240)"
              },
           "50%": {
               backgroundColor: "rgb(235, 238, 240)"
           },
              "100%": {
                  backgroundColor: "white"
              }
          }
    }))

    const styles = useStyles()
    return (
        <div className={styles.notification}>
            <div className={styles.icon}><Twitter /></div>
            <div className={styles.content}><Typography color="textSecondary"  variant="body2">Welcome to Twitter mobile clone</Typography></div>
        </div>
    )
}

export default NotificationMessage
