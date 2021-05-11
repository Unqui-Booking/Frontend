import { SET_LOADING, LOGS_ERROR, GET_CHAIR_BY_DESK } from '../Actions/types'

const initialState = {
    loading: true,
    error: null,
    chairs:[],
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
        case GET_CHAIR_BY_DESK:
            return {
            ...state,
            chairs: action.payload,
            }
        default: return state
    }

}