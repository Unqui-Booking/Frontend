import { SET_LOADING, LOGS_ERROR, FAILED_LOGIN, GET_USER, USER_EXISTS, ADD_USER } from '../Actions/types'

const initialState = {
    loading: true,
    error: null,
    failedLogin: false,
    user: undefined,
    userExists: false,
    userRegistered: false,
}

export default function(state = initialState, action){

    switch(action.type){

        case SET_LOADING:
            return {
            ...state,
            loading: true
            };
        case LOGS_ERROR:
            return {
            ...state,
            error: action.payload
            };
        case FAILED_LOGIN:
            return {
            ...state,
            failedLogin: action.payload,
            
            };
        case GET_USER:
            return {
            ...state,
            user: action.payload,
            //userExists: action.payload.length > 0,
            }
        case USER_EXISTS:
            return {
            ...state,
            userExists: action.payload,
            }
        case ADD_USER:
            return {
            ...state,
            userRegistered: true,
            }
        default: return state
        
    }
}