import { SET_LOADING, LOGS_ERROR, GET_BOOKINGS, ADD_BOOKING, GET_SPECIFIC_BOOKING, GET_SPECIFIC_BOOKING_BY_SEAT_DATE } from '../Actions/types'

const initialState = {
    loading:true,
    success: false,
    error: null,
    bookings:[],
    bookingsFiltered: [],
    bookingsFilteredBySeatDate: []
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
                bookings: action.payload,
            }
        case ADD_BOOKING:
            return {
                ...state,
                success: true,
                loading: false,
            }
        case GET_SPECIFIC_BOOKING:
            return {
                ...state,
                bookingsFiltered: action.payload,
            }
        case GET_SPECIFIC_BOOKING_BY_SEAT_DATE:
            return {
                ...state,
                bookingsFilteredBySeatDate: action.payload,
            }
        default: return state
    }

}