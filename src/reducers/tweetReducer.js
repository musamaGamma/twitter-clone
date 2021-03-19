import { CREATE_TWEET_REQUEST, CREATE_TWEET_SUCCESS, CREATE_TWEET_FAIL,CREATE_TWEET_RESET, GET_TWEETS_REQUEST, GET_TWEETS_SUCCESS, GET_TWEETS_FAIL, DELETE_TWEET_REQUEST, DELETE_TWEET_SUCCESS, DELETE_TWEET_FAIL, LIKE_TWEET, UNLIKE_TWEET, GET_TWEET_LIKES, GET_PROFILE_TWEETS_REQUEST, GET_PROFILE_TWEETS_SUCCESS, GET_PROFILE_TWEETS_FAIL } from "../actions/types/postTypes";
import { Switch } from "@material-ui/core";


export const tweetCreateReducer = (state = {}, action) =>{
     
    switch (action.type) {
        case CREATE_TWEET_REQUEST:
            return {loading: true}
        case CREATE_TWEET_SUCCESS: {
            return {loading: false,success: true, tweet: action.payload}
        }
        case CREATE_TWEET_FAIL: {
            return {loading: false, error: action.payload}
        }
        case CREATE_TWEET_RESET: {
            return {}
        }
    
        default:
            return state;
    }

}


export const tweetsListReducer = (state = [], action) => {
     
    switch (action.type) {
        case GET_TWEETS_REQUEST:
            return {loading: true}
        case GET_TWEETS_SUCCESS:
            return {loading: false, tweets: action.payload}
        case GET_TWEETS_FAIL:
            return {loading: false, error: action.payload}
    
        default:
            return state
    }
}
export const tweetDeleteReducer = (state = {}, action) => {
     
    switch (action.type) {
        case DELETE_TWEET_REQUEST:
            return {loading: true}
        case DELETE_TWEET_SUCCESS:
            return {loading: false, success: true}
        case DELETE_TWEET_FAIL:
            return {loading: false, error: action.payload}
    
        default:
            return state
    }
}

export const tweetLikesReducer = (state = {likes: [], success: false}, action) => {
    switch (action.type) {
        case LIKE_TWEET:
            return {likes: action.payload, success: true}
        case UNLIKE_TWEET:
            return {likes: action.payload, success: false}
        default: 
        return state
    }
}
export const likesUpdateReducer = (state = {likes: [], success: false}, action) => {
    switch (action.type) {
        case GET_TWEET_LIKES:
            return {likes: action.payload, success: true}
      
        default: 
        return state
    }
}

export const profileTweetsListReducer = (state = [], action) => {
    switch (action.type) {
        case GET_PROFILE_TWEETS_REQUEST:
            return {loading: true}
        case GET_PROFILE_TWEETS_SUCCESS:
            return {loading: false, tweets: action.payload}
        case GET_PROFILE_TWEETS_FAIL:
            return {loading: false, errors: action.payload}
        default:
            return state
    }
}