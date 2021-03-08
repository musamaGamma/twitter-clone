import { CREATE_TWEET_REQUEST, CREATE_TWEET_SUCCESS, CREATE_TWEET_FAIL } from "../actions/types/postTypes";


export const tweetCreateReducer = (state = {}, action) =>{
     
    switch (action.type) {
        case CREATE_TWEET_REQUEST:
            return {loading: true}
        case CREATE_TWEET_SUCCESS: {
            return {loading: false, tweet: action.payload}
        }
        case CREATE_TWEET_FAIL: {
            return {loading: false, error: action.payload}
        }
    
        default:
            return state;
    }

}