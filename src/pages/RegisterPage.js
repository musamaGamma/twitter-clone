import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { Twitter } from "@material-ui/icons";
import useStyles from "./RegistePageStyles";
import { useEffect } from "react";
import { useState } from "react";
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../actions/userActions";

const RegisterPage = ({history}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");

  //validation state

  const styles = useStyles();
  const [nameErr, setNameErr] = useState(false);
  const [nameErrMsg, setNameErrMsg] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const [passwordErrMsg, setPasswordErrMsg] = useState("");



  const userRegister = useSelector(state => state.userRegister)
  const {userInfo, errors} = userRegister
  console.log({errors})
  useEffect(() => {
    document.title = "Sign up for twitter";
    if(userInfo) {
      history.push("/")
    }
  }, [userInfo]);

  
  const validateName = () => {
      if(name.length == 0) {
          setNameErr(true)
          setNameErrMsg("Whats is your name?")
      }
      else {
        setNameErr(false)
        setNameErrMsg("")
      }
  }
  const validatePassword = () => {
    if (password !== passwordTwo) {
        setPasswordErr(true);
        setPasswordErrMsg("Password don't match");
      } else if(password.length < 6){
        setPasswordErr(true);
        setPasswordErrMsg("password must be 6 characters long");
      }
      else {
          setPasswordErr(false);
          setPasswordErrMsg("")
      }
  }


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
    
  };
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
   validatePassword()
   if(nameErr || emailErr || passwordErr) return
   dispatch(signup(name, email, password))

   
   
    
  };
  return (
    <div>
      <div className={styles.header}>
        <div />
        <Twitter />
        <Button
          disabled={ !name || !email  || !password || !passwordTwo ? styles.disabled : false}
          className={
           !name || !email  || !password || !passwordTwo ? styles.disabled : null
          }
          form="sign"
          type="submit"
          variant="contained"
        >
          Next
        </Button>
      </div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit} id="sign" className={styles.form}>
          <Typography variant="h1" >Create your account</Typography>
        {errors && errors.map(error => (<Typography className={styles.errorMessage} variant="body2">{error.msg}</Typography>))}
        
          <TextField
            required
            fullWidth
            onKeyUp={validateName}
            type="text"
            label="Name"
            variant="outlined"
            className={styles.nameHelpText}
            inputProps={{maxLength: 20}}
            helperText={`${name.length}/20`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            helperText={emailErrMsg}
            error={emailErr}
            onKeyUp={validateEmail}
            fullWidth
         
            className={emailErr && styles.errorOutline}
            type="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            fullWidth
            type="password"
            label="Password"
            variant="outlined"
            onKeyDown={()=> setPasswordErr(false)}
            value={password}
            error={passwordErr}
            helperText={passwordErr ?passwordErrMsg : "password should be six or more characters"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            required
            fullWidth
            type="password"
            label="Confirm Password"
            
            variant="outlined"
            onKeyDown={()=> setPasswordErr(false)}
            error={passwordErr}
            helperText={passwordErr ?passwordErrMsg : "password should be six or more characters"}
            value={passwordTwo}
            onChange={(e) => setPasswordTwo(e.target.value)}
          />
        </form>
        <div style={{marginTop: "1rem"}}>
            <Link to="/login">
                Already have an account
            </Link>
        
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
