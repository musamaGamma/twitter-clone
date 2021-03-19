import { PROFILE_SAVE_REQUEST, PROFILE_SAVE_SUCCESS, PROFILE_SAVE_FAIL, PROFILE_INFO_REQUEST, PROFILE_INFO_SUCCESS, PROFILE_INFO_FAIL } from "../actions/types/profileTypes";


export const profileSaveReducer = (state= {}, action) =>{
   switch (action.type) {
       case PROFILE_SAVE_REQUEST:
           return {loading: true}
        case PROFILE_SAVE_SUCCESS:
            return {loading: false, success: true, profileInfo: action.payload}
        case PROFILE_SAVE_FAIL:
            return {loading: false, error: action.payload}
       default:
           return state
   }
}

export const profileInfoReducer = (state ={}, action) => {
    switch (action.type) {
        case PROFILE_INFO_REQUEST:
            return {loading: true}
         case PROFILE_INFO_SUCCESS:
             return {loading: false, success: true, profile: action.payload}
         case PROFILE_INFO_FAIL:
             return {loading: false, error: action.payload}
        default:
            return state
    }
}