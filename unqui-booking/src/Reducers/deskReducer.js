import { SET_LOADING, LOGS_ERROR, GET_DESKS, SELECTED_DESK  } from '../Actions/types'

const initialState = {
    loading:true,
    error: null,
    desks:[],
    deskID: null,
    deskSelected: false,
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
        case SELECTED_DESK:
            return{
                ...state,
                deskID: action.payload,
                deskSelected: true
            }    
        default: return state
    }

}