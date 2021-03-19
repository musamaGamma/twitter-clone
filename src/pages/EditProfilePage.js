import React, { useEffect, useState } from "react";
import useStyles from "./EditProfilePageStyles";
import { ArrowBack, CameraAltOutlined } from "@material-ui/icons";
import {
  Typography,
  Button,
  Avatar,
  IconButton,
  TextField,
  FormGroup,
  FormControl,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import  FileBase from "react-file-base64"
import { useDispatch, useSelector } from "react-redux";
import { saveProfileInfo } from "../actions/profileActions";


const EditProfilePage = ({history}) => {
  const [coverImage, setCoverImage] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const {success} = useSelector(state => state.profileSave)
  useEffect(() => {
    document.title = "Edit profile / Twitter";
    if(success) {
      history.push("/")
    }
  }, [success]);

  const styles = useStyles();
  
 const dispatch = useDispatch()
  const handleSubmit = e => {
    e.preventDefault()
    // dispatch(saveProfileInfo(name, bio))
    
  }
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.subHeader}>
          <Link to="/profile">
            <IconButton>
              <ArrowBack />
            </IconButton>
          </Link>
          <Typography variant="h2">Edit profile</Typography>
        </div>
        <Button variant="contained" form="profile" type="submit">
          Save
        </Button>
      </div>
      <form onSubmit={handleSubmit} className={styles.form} id="profile">
        <div className={styles.coverImage}>
          {coverImage && ( <img src={coverImage} alt="cover "/>)}
         
          <IconButton className={styles.addimgIcon}>
            <label htmlFor="_coverImage">
              <CameraAltOutlined />
            </label>
            <FileBase
              id="_coverImage"
              
              required
              type="file"
              multiple={false}
              
              onDone={({ base64 }) => setCoverImage(base64)}
            />
          </IconButton>

          <div className={styles.avatarContainer}>
            <Avatar src={profileImage}/>
            <IconButton className={styles.addimgIcon} >
              <label htmlFor="_profileImage">
                <CameraAltOutlined />
                </label>
             
              <FileBase
                id="_profileImage"
                required
                type="file"
                multiple={false}
             
                onDone={({ base64 }) => setProfileImage(base64)}
              />
               
            </IconButton>
          </div>
        </div>
        <div className={styles.content}>
          <div className="formTextFieldContainer">
            <TextField
              variant="outlined"
              required
              type="text"
              label="Name"
              fullWidth
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <TextField
              multiline={true}
              variant="outlined"
              type="text"
              label="Bio"
              fullWidth
              rows={4}
              value={bio}
              onChange={e => setBio(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfilePage;
