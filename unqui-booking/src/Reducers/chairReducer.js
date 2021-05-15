import { SET_LOADING, LOGS_ERROR, GET_CHAIR_BY_DESK, SELECTED_SEAT } from '../Actions/types'

const initialState = {
    loading: true,
    error: null,
    chairs:[],
    seatSelected: false,
    seatId: null,
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
        case SELECTED_SEAT:
            return {
                ...state,
                seatId: action.payload,
                seatSelected: true,
            }

        default: return state
    }

}