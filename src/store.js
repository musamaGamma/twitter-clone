import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import  {composeWithDevTools} from 'redux-devtools-extension' 
import reducer from './reducers'


const userInfoFromStorage = localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo")): null
const profileInfoFromStorage = localStorage.getItem("profileInfo")? JSON.parse(localStorage.getItem("profileInfo")) : null
const initialState = {
    userLogin: {userInfo :userInfoFromStorage},
    profileInfo: {profile: profileInfoFromStorage}
}
const middlewares = [thunk]

export default createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))