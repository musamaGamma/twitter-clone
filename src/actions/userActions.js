import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT } from "./types/userTypes"
import axios from "axios"




export const signup = (name, email, password) =>async  (dispatch) => {
  
  dispatch({type: USER_REGISTER_REQUEST})
  const config = {
      headers: {
          "Content-Type": "application/json"
      }
  }
  try {
      const {data} = await axios.post("https://m-twitter-api.herokuapp.com/api/users", {name, email, password}, config)
      dispatch({type: USER_REGISTER_SUCCESS, payload: data})
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    const errors = error.response.data.errors
    dispatch({type: USER_REGISTER_FAIL, payload: errors})
  }   

}

export const login = ( email, password) =>async  (dispatch) => {
  
    dispatch({type: USER_LOGIN_REQUEST})
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    console.log({email}, {password})
    try {
        const {data} = await axios.post("https://m-twitter-api.herokuapp.com/login", {email, password}, config)
        dispatch({type: USER_LOGIN_SUCCESS, payload: data})
        console.log(data.token, "login token")
        localStorage.setItem("userInfo", JSON.stringify(data))
    } catch (error) {
      const errors = error.response.data.errors
      dispatch({type: USER_LOGIN_FAIL, payload: errors})
    }   
  
  }

  export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo")
    localStorage.removeItem("profileInfo")
    dispatch({type: USER_LOGOUT})
  }