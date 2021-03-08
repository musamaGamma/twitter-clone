import {combineReducers} from 'redux'
import {  tweetCreateReducer } from './tweetReducer'


export default combineReducers({
    tweetCreate: tweetCreateReducer
})