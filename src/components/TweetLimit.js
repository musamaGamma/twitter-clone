import React from 'react'
import { CircularProgress, Box, makeStyles } from '@material-ui/core'


const TweetLimit = ({value}) => {

    const useStyles = makeStyles(()=> ({
         progress: {
            color: "rgba(29,161,242,1.00)"
         },
         limit: {
             color: "red"
         }
    }))
    const styles = useStyles()
    const normalize = value => value * 100/280 
    return (
        <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" value={normalize(value)} size="1.5rem" thickness="4" className={value < 260 ?styles.progress : styles.limit}/>
  <Box
    top={0}
    left={0}
    bottom={0}
    right={0}
    position="absolute"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
      {value > 260 && (
        <small style={{fontSize: ".7rem"}}>{ 280 - value}</small>
      ) }

  </Box>
</Box>
    )
}

export default TweetLimit
