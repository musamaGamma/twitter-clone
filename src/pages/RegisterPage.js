import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { Twitter } from "@material-ui/icons";
import useStyles from "./RegistePageStyles";
import { useEffect } from "react";
import { useState } from "react";
import {Link} from "react-router-dom"

const RegisterPage = () => {
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
  useEffect(() => {
    document.title = "Sign up for twitter";
  }, []);

  
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


  const validate = (e) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid = re.test(String(email).toLowerCase());
    if (!valid) {
      setEmailErr(true);
      setEmailErrMsg("Please enter a valid email");
    } else {
      setEmailErr(false);
      setEmailErrMsg("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   validatePassword()
    
  };
  return (
    <div>
      <div className={styles.header}>
        <div />
        <Twitter />
        <Button
          disabled={   (nameErr && true) ||
            (emailErr && true) ||
            (passwordErr && true)}
          className={
            (nameErr && styles.disabled) ||
            (emailErr && styles.disabled) ||
            (passwordErr && styles.disabled)
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
          <Typography variant="h1">Create your account</Typography>
          <TextField
            required
            fullWidth
            onKeyUp={validateName}
            type="text"
            label="Name"
            variant="outlined"
            helperText={`${name.length}/50`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            helperText={emailErrMsg}
            error={emailErr}
            onKeyUp={validate}
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
            helperText={passwordErrMsg}
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
            helperText={passwordErrMsg}
            value={passwordTwo}
            onChange={(e) => setPasswordTwo(e.target.value)}
          />
        </form>
        <div>
            <Link to="/login" >
                Already have an account
            </Link>
        
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
