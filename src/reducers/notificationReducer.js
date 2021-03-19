import {NOTICATIONS_READ } from "../actions/types/notificationTypes"


export const notificationsReducer = (state = {count: 1}, action) => {

    switch (action.type) {
        case NOTICATIONS_READ:
            return {count: 0}
    
        default:
            return state
    }
}