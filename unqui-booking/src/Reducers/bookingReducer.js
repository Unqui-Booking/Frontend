import { SET_LOADING,
         LOGS_ERROR, 
         GET_BOOKINGS, 
         ADD_BOOKING, 
         GET_SPECIFIC_BOOKING, 
         GET_SPECIFIC_BOOKING_BY_SEAT_DATE,
         GET_MAP_AVAILABILY_SEATS,
         GET_BOOKINGS_BY_USER,
         GET_HISTORICAL_BOOKINGS_BY_USER,
         GET_CURRENTS_BOOKINGS_BY_USER,
         SET_COPY_HISTORICAL_BOOKINGS,} from '../Actions/types'

const initialState = {
    loading:true,
    success: false,
    error: null,
    bookings:[],
    bookingsFiltered: [],
    bookingsFilteredBySeatDate: [],
    mapAvailabilySeats: null,
    bookingsByUSer: [],
    bookingsHistoricalByUser: [],
    bookingsCurrentsByUser: [],
    copyHistoricalBookings: [],
}

export default function(state = initialState, action){

    switch(action.type){

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
        case GET_MAP_AVAILABILY_SEATS:
            return {
                ...state,
                mapAvailabilySeats: Object.entries(action.payload),
                
            }
        case GET_BOOKINGS_BY_USER:
            return {
                ...state,
                bookingsByUSer: action.payload,
                
            }
        case GET_HISTORICAL_BOOKINGS_BY_USER:
            return {
                ...state,
                bookingsHistoricalByUser: action.payload,
                copyHistoricalBookings: action.payload,
            }
        case GET_CURRENTS_BOOKINGS_BY_USER:
            return {
                ...state,
                bookingsCurrentsByUser: action.payload,
                
            }
        case SET_COPY_HISTORICAL_BOOKINGS:
            return {
                ...state,
                copyHistoricalBookings: action.payload,
            }
        default: return state
    }

}