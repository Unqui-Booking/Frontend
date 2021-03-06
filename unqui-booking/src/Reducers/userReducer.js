import { SET_LOADING, LOGS_ERROR, FAILED_LOGIN, GET_USER, ADD_USER, IS_FINED_USER, SET_USER } from '../Actions/types'

const initialState = {
    loading: true,
    error: null,
    failedLogin: false,
    user: undefined,
    successRegister: false,
    isFinedUser: null,
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
            }
        case ADD_USER:
            return {
            ...state,
            successRegister: true,
            }
        
        case IS_FINED_USER:
            return {
                ...state,
                isFinedUser: action.payload
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        default: return state
        
    }
}