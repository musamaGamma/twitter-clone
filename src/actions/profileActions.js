import axios from "axios"
import { PROFILE_SAVE_REQUEST, PROFILE_SAVE_SUCCESS, PROFILE_SAVE_FAIL, PROFILE_INFO_REQUEST, PROFILE_INFO_SUCCESS, PROFILE_INFO_FAIL } from "./types/profileTypes"


export const saveProfileInfo = (name, bio, coverImage, profileImage) => async(dispatch, getState) => {
    
    
     try {
        dispatch({type: PROFILE_SAVE_REQUEST})
        const {userRegister: {userInfo}} = getState()
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": userInfo.token
            }
        }
       
        

        const {data} = await axios.put("https://m-twitter-api.herokuapp.com/api/profile", {name, bio, coverImage, profileImage}, config)
        dispatch({type: PROFILE_SAVE_SUCCESS, payload: data})
     } catch (error) {
         dispatch({type: PROFILE_SAVE_FAIL, payload: error.message})
     }


}

export const getProfileInfo = () => async (dispatch, getState) => {
    try {
        const {userLogin: {userInfo}} = getState()
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": userInfo.token
            }
        }
       
        dispatch({type: PROFILE_INFO_REQUEST})

        const {data} = await axios.get("https://m-twitter-api.herokuapp.com/api/profile",  config)
        dispatch({type: PROFILE_INFO_SUCCESS, payload: data})
        localStorage.setItem("profileInfo", JSON.stringify(data))
     } catch (error) {
  
         dispatch({type: PROFILE_INFO_FAIL, payload: error.message})
     }
}