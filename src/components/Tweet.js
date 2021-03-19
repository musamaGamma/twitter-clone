import React from "react";
import { Typography, IconButton, Avatar } from "@material-ui/core";
import {
  MoreHoriz,
  ShareOutlined,
  ChatBubbleOutline,
  FavoriteBorderOutlined,
  Repeat,
  FavoriteSharp,
} from "@material-ui/icons";
import useStyles from "./TweetStyles";
import { useState } from "react";
import TweetTools from "./TweetTools";
import RetweetTools from "./RetweetTools";
import { useDispatch, useSelector } from "react-redux";
import { likeTweet, unlikeTweet } from "../actions/tweetAction";
import moment from "moment"
import { useEffect } from "react";

const Tweet = ({ id, name, username, profileImage, text, time, likes, owner }) => {
  const [tools, setTools] = useState(false);
  const [retweet, setRetweet] = useState(false);
  const [retweetTools, setRetweetTools] = useState(false);
  const [like, setLike] = useState(false);

  const openMenu = () => {
    setTools(true);
  };
  const styles = useStyles();

  const handleRetweet = () => {
    if (retweet) return setRetweet(false);
    setRetweetTools(true);
  };
  const dispatch = useDispatch();

  const profileInfo = useSelector(state => state.profileInfo)
  const { profile } = profileInfo
  const tweetLikes = useSelector(state => state.tweetLikes)
  
  console.log({likes})

  const handleLike = async () => {
     
    setLike(!like)
    if(!like) dispatch(likeTweet(id))
     else dispatch(unlikeTweet(id))
   
  };
  // const {likes: likesUpdate} = useSelector(state=> state.tweetLikes)
 
  useEffect(()=> {
    if(likes.find(x => x.user ===  profile?._id)) {
      setLike(true)
    }
  }, [profile])
  return (
    <div className={styles.tweet}>
      <div className={styles.avatarContainer}>
        <Avatar src={profileImage} />
      </div>

      <div  className={styles.tweetContent}>
        <div className={styles.tweetInfo}>
          <div className={styles.userInfo}>
            <Typography variant="h2">{name} </Typography>
            <Typography variant="body2"> . {moment(time).fromNow()} </Typography>
          </div>
          <IconButton onClick={openMenu}>
            <MoreHoriz />
          </IconButton>
        </div>
        <Typography variant="body2" className={styles.tweetText}>
          {text}
        </Typography>
        <div className={styles.tweetIcons}>
          <IconButton>
            <ChatBubbleOutline />
          </IconButton>
          <IconButton
            className={retweet && styles.retweet}
            onClick={handleRetweet}
          >
            {" "}
            <Repeat />{" "}
          </IconButton>
          <IconButton className={like && styles.like} onClick={handleLike}>
            {like ? (
              <IconButton>
                {" "}
                <FavoriteSharp /> <small className={styles.likeCount}> {likes.length}</small>{" "}
              </IconButton>
            ) : (
              <IconButton> 
              <FavoriteBorderOutlined />

              <small className={styles.likeCount}> {likes.length}</small>
              </IconButton>
            )}{" "}
          </IconButton>
          <IconButton>
            {" "}
            <ShareOutlined />
          </IconButton>
        </div>
      </div>

      <TweetTools id={id} setTools={setTools} tools={tools} owner={owner}/>
      <RetweetTools
        setTools={setRetweetTools}
        tools={retweetTools}
        setRetweet={setRetweet}
      />
    </div>
  );
};

export default Tweet;
