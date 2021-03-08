import {CREATE_TWEET_REQUEST, CREATE_TWEET_SUCCESS, CREATE_TWEET_FAIL } from './postTypes'
import axios from 'axios'


export const createTweet = (tweet) => async(dispatch) => {
    try {
        dispatch({type: CREATE_TWEET_REQUEST})

        const {data} = await axios.post("/api/tweets", tweet)
        dispatch({type: CREATE_TWEET_REQUEST, payload: data})

    } catch (error) {
        dispatch({type: CREATE_TWEET_FAIL, payload: error.message})
    }
}