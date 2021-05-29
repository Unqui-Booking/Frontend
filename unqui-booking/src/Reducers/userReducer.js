import { SET_LOADING, LOGS_ERROR, USER_LOGGED } from '../Actions/types'

const initialState = {
    loading: true,
    error: null,
    userLogged: false,
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
        case USER_LOGGED:
            return {
            ...state,
            userLogged: action.payload,
            }
        default: return state
    }

}