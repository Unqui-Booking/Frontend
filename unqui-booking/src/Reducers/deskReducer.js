import { SET_LOADING, LOGS_ERROR, GET_DESKS  } from '../Actions/types'

const initialState = {
    loading:true,
    error: null,
    desks:[],
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
        case GET_DESKS:
            return {
                ...state,
                desks:action.payload,
            }
        default: return state
    }

}