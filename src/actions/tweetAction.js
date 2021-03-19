import {
  CREATE_TWEET_REQUEST,
  CREATE_TWEET_SUCCESS,
  CREATE_TWEET_FAIL,
  GET_TWEETS_REQUEST,
  GET_TWEETS_SUCCESS,
  GET_TWEETS_FAIL,
  DELETE_TWEET_REQUEST,
  DELETE_TWEET_SUCCESS,
  DELETE_TWEET_FAIL,
  LIKE_TWEET,
  UNLIKE_TWEET,
  GET_TWEET_LIKES,
  GET_PROFILE_TWEETS_REQUEST,
  GET_PROFILE_TWEETS_SUCCESS,
  GET_PROFILE_TWEETS_FAIL
} from "./types/postTypes";
import axios from "axios";

export const createTweet = (tweet) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_TWEET_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": userInfo.token,
      },
    };

    const { data } = await axios.post("https://m-twitter-api.herokuapp.com/api/tweets", { text: tweet }, config);
    dispatch({ type: CREATE_TWEET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_TWEET_FAIL, payload: error.message });
  }
};
export const getTweets = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_TWEETS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": userInfo.token,
      },
    };

    const { data } = await axios.get("https://m-twitter-api.herokuapp.com/api/tweets", config);
    dispatch({ type: GET_TWEETS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_TWEETS_FAIL, payload: error.message });
  }
};
export const getProfileTweets = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_PROFILE_TWEETS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": userInfo.token,
      },
    };

    const { data } = await axios.get("https://m-twitter-api.herokuapp.com/api/mytweets", config);
    dispatch({ type: GET_PROFILE_TWEETS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PROFILE_TWEETS_FAIL, payload: error.message });
  }
};

export const deleteTweet = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_TWEET_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": userInfo.token,
      },
    };
    await axios.delete("https://m-twitter-api.herokuapp.com/api/tweets/" + id, config);
    dispatch({ type: DELETE_TWEET_SUCCESS });
  } catch (error) {
    dispatch({ type: DELETE_TWEET_FAIL, payload: error.message });
  }
};

export const likeTweet = (id) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    console.log(userInfo.token, "liking");
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": userInfo.token,
      },
    };

    const { data } = await axios.put("https://m-twitter-api.herokuapp.com/api/tweets/" + id + "/like", {}, config);
    dispatch({ type: LIKE_TWEET, payload: data });
  } catch (error) {
    // dispatch({type: DELETE_TWEET_FAIL, payload: error.message})
    console.log(error);
  }
};

export const unlikeTweet = (id) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    console.log(userInfo.token, "liking");
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": userInfo.token,
      },
    };

    const { data } = await axios.put(
      "https://m-twitter-api.herokuapp.com/api/tweets/" + id + "/unlike",
      {},
      config
    );
    dispatch({ type: UNLIKE_TWEET, payload: data });
  } catch (error) {
    // dispatch({type: DELETE_TWEET_FAIL, payload: error.message})
    console.log(error);
  }
};

export const getTweetLikes = (id) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    console.log(userInfo.token, "liking");
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": userInfo.token,
      },
    };

    const { data } = await axios.get(
      "https://m-twitter-api.herokuapp.com//api/tweets/" + id + "/likes",
      {},
      config
    );
    dispatch({ type: GET_TWEET_LIKES, payload: data });
  } catch (error) {
    // dispatch({type: DELETE_TWEET_FAIL, payload: error.message})
    console.log(error);
  }
};
