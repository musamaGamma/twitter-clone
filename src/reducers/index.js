import {combineReducers} from 'redux'
import {  tweetCreateReducer, tweetsListReducer, tweetDeleteReducer, tweetLikesReducer, likesUpdateReducer, profileTweetsListReducer } from './tweetReducer'
import { userRegisterReducer, userLoginReducer } from './usersReducer'
import {profileSaveReducer, profileInfoReducer} from "./profileReducer"
import { notificationsReducer } from './notificationReducer'


export default combineReducers({
    tweetCreate: tweetCreateReducer,
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    profileSave: profileSaveReducer,
    profileInfo: profileInfoReducer,
    tweetsList: tweetsListReducer,
    tweetDelete: tweetDeleteReducer,
    tweetLikes: tweetLikesReducer,
    likesUpdate: likesUpdateReducer,
    profileTweetsList: profileTweetsListReducer,
    notifications: notificationsReducer
})