import React from "react";
import { Typography, IconButton, Avatar } from "@material-ui/core";
import { MoreHoriz, ShareOutlined,  ChatBubbleOutline, FavoriteBorderOutlined, Repeat,  FavoriteSharp } from "@material-ui/icons";
import useStyles from "./TweetStyles";
import { useState } from "react";
import TweetTools from "./TweetTools";

const Tweet = () => {

  const [tools, setTools] = useState(false)
  const [retweet, setRetweet] = useState(false)
  const [like, setLike] = useState(false)

  const openMenu = () => {
    setTools(true)
  }
  const styles = useStyles();
  return (
    <div className={styles.tweet}>
         
         <div style={{flex: ".15"}}>
         <Avatar />
         </div>
        
        <div style={{flex: ".85"}}>
        <div className={styles.tweetInfo}>
        <div className={styles.userInfo}>
        
          <Typography variant="h2">name </Typography>
          <Typography variant="p">@username . 1h </Typography>
        </div>
        <IconButton onClick={openMenu}>
          <MoreHoriz />
        </IconButton>
      </div>
      <Typography variant="body2" className={styles.tweetText}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, vitae
        ad, blanditiis ducimus, soluta voluptatum enim ipsam velit animi totam
        deserunt fugit facere magnam architecto. Recusandae totam blanditiis
        iste et?
      </Typography>
      <div className={styles.tweetIcons}>
          <IconButton><ChatBubbleOutline /></IconButton>
          <IconButton className={retweet && styles.retweet} onClick={()=> setRetweet(!retweet)}> <Repeat /> </IconButton>
          <IconButton className={like && styles.like} onClick={()=> setLike(!like)}>{like? (<FavoriteSharp />) : (<FavoriteBorderOutlined />) } </IconButton>
          <IconButton> <ShareOutlined /></IconButton>
      </div>

        </div>
      
      <TweetTools setTools={setTools}  tools={tools}/>
    </div>
  );
};

export default Tweet;
