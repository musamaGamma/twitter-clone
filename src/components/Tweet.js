import React from "react";
import { Typography, IconButton, Avatar } from "@material-ui/core";
import { MoreVert, ShareOutlined,  ChatBubbleOutline, FavoriteBorderOutlined, Repeat } from "@material-ui/icons";
import useStyles from "./TweetStyles";

const Tweet = () => {
  const styles = useStyles();
  return (
    <div className={styles.tweet}>
      <div className={styles.tweetInfo}>
        <div className={styles.userInfo}>
          <Avatar />
          <Typography variant="h2">name </Typography>
          <Typography variant="p">@username . 1h </Typography>
        </div>
        <IconButton>
          <MoreVert />
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
          <IconButton> <Repeat /> </IconButton>
          <IconButton><FavoriteBorderOutlined /> </IconButton>
          <IconButton> <ShareOutlined /></IconButton>
      </div>
    </div>
  );
};

export default Tweet;
