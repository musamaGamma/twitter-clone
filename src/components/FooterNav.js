import React from "react";
import { IconButton, Divider, Badge } from "@material-ui/core";
import {
  Search,
  NotificationsOutlined,
  MailOutline,
  HomeSharp,
  NotificationsSharp,
  HomeOutlined,
  SearchSharp,
  Twitter,
  MailSharp
} from "@material-ui/icons";
import useStyles from "./FooterNavStyles";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const FooterNav = () => {
  const styles = useStyles();
  const location = useLocation();
  const path = location.pathname;

  const notifications = useSelector(state => state.notifications)
    const {count} = notifications
 
  return (
    <footer className={styles.footer}>
      {path == "/messages" ? (<IconButton className={styles.tweet}>
                 <MailOutline/> 
               
            </IconButton>) : ( <Link to="/compose">
            <IconButton className={styles.tweet}>
                <Twitter />
               
            </IconButton> </Link>)}
       
      <Divider />
      <div className={styles.navIcons}>
        <IconButton>
          <Link to="/">
            {path == "/" ? (
              <HomeSharp className={styles.active} />
            ) : (
              <HomeOutlined />
            )}
          </Link>
        </IconButton>
        <IconButton>
          <Link to="/search">
              {path == "/search" ? ( <SearchSharp className={styles.active}/>) : (<Search  />)}
            
          </Link>
        </IconButton>
        <IconButton>
          <Link to="/notifications">
            {path == "/notifications" ? (
              <NotificationsSharp
                className={styles.active}
              />
            ) : (
              <Badge badgeContent={count} className={styles.badge}>
                
                <NotificationsOutlined />
              </Badge>
            )}
          </Link>
        </IconButton>
        <IconButton>
          <Link to="/messages">
              {path== "/messages" ? <MailSharp className={styles.active} /> : <MailOutline  />}
            
          </Link>
        </IconButton>
      </div>
    </footer>
  );
};

export default FooterNav;
