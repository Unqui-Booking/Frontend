import { SET_LOADING, LOGS_ERROR, GET_BOOKINGS, ADD_BOOKING } from '../Actions/types'

const initialState = {
    loading:true,
    error: null,
    bookings:[],
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
        case GET_BOOKINGS:
            return {
                ...state,
                bookings:action.payload,
            }
        case ADD_BOOKING:
            return {
                ...state,
                success: true,
                loading: false,
            }
        default: return state
    }

}