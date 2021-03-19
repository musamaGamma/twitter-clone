import React, { useEffect, useState } from "react";
import { Twitter } from "@material-ui/icons";
import { TextField, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./LoginPageStyles";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../actions/userActions";

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [password, setPassword] = useState("");
  const styles = useStyles();
  const userLogin = useSelector((state) => state.userLogin);
   const {userInfo, errors} = userLogin

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    document.title = "Login to Twitter";
  
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const validateEmail = (e) => {
    setEmailErr(false)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid = re.test(String(email).toLowerCase());

    setTimeout(()=> {
      if(email == "") return
      if (!valid) {
        setEmailErr(true);
        setEmailErrMsg("Please enter a valid email");
      } else {
        setEmailErr(false);
        setEmailErrMsg("");
      }
    }, 1000)
  }
  return (
    <div className={styles.loginPage}>
      <div className={styles.logo}>
        <Twitter />
      </div>
      <Typography className={styles.header} variant="h1" fullWidth>
          Login to Twitter
        </Typography>

  {errors && errors.map(error => (<Typography className={styles.errorMessage} variant="body2">{error.msg}</Typography>))}
      <form className={styles.form} onSubmit={handleSubmit}>
       
        <TextField
          required
          type="email"
          fullWidth
          className={styles.input}
          variant="outlined"
          label="Email"
          value={email}
          onKeyUp={validateEmail}
          error={emailErr}
          helperText={emailErrMsg}
          onChange={(e)=> setEmail(e.target.value)}
        />
        <TextField
          required
          type="password"
          fullWidth
          className={styles.input}
          variant="outlined"
          label="Password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
        <Button
        type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={styles.button}
          disabled={!email? true : !password? true: false}
        >
          Login
        </Button>
      </form>
      <Link to="signup">Sign up for Twitter</Link>
    </div>
  );
};

export default LoginPage;
