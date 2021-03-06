import { LOGS_ERROR, 
         GET_BOOKINGS, 
         ADD_BOOKING, 
         GET_SPECIFIC_BOOKING, 
         GET_SPECIFIC_BOOKING_BY_SEAT_DATE,
         GET_MAP_AVAILABILY_SEATS,
         GET_BOOKINGS_BY_USER,
         GET_HISTORICAL_BOOKINGS_BY_USER,
         GET_CURRENTS_BOOKINGS_BY_USER,
         SET_COPY_HISTORICAL_BOOKINGS,   
         GET_BOOKINGS_TODAY,
         SET_COPY_BOOKINGS_TODAY,
         OPEN_MODAL_CANCEL,
         CANCEL_BOOKING,
         OPEN_SUCCESS_CANCEL,
         CONFIRM_BOOKING,
         GET_BOOKING_BY_STATE_FINED,
         GET_BOOKING_BY_STATE_CONFIRMED,
         SET_SUCCESS_CONFIRM_BOOKING,
         FINE_BOOKING,
         SET_SUCCESS_FINE_BOOKING,
         SET_COPY_BOOKING_FINED,
         SET_COPY_BOOKINGS_CONFIRMED,
         UPDATE_STATE_BOOKING,
         GET_BOOKINGS_TO_CANCEL,
         CANCEL_BOOKING_BY_FINED
        } from '../Actions/types'

const initialState = {
    loading:true,
    success: false,
    error: null,
    bookings:[],
    bookingsFiltered: [],
    bookingsFilteredBySeatDate: [],
    mapAvailabilySeats: null,
    countChairBySide: 0,
    bookingsByUSer: [],
    bookingsHistoricalByUser: [],
    bookingsCurrentsByUser: [],
    copyHistoricalBookings: [],
    bookingsToday: [],
    copyBookingsToday: [],  
    openModalCancel: false,
    bookingCanceled: false,
    succesCancel: false,
    succesConfirmBooking: false,
    listConfirmedBookings: [],
    listFinedBookings: [],
    copyListFinedBookings: [],
    succesFineBooking: false,
    textAlertFineOrConfirmBooking: '',
    copyListConfirmedBookings: [],
    successUpdateStateBooking: false,
    bookingsToCancel: [],
    bookingFined: null,
    bookingCancelledByFined: null
}

export default function reducerBooking (state = initialState, action){

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
                countChairBySide: Object.entries(action.payload).length,
                
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

        case GET_BOOKINGS_TODAY:
            return {
                ...state,
                bookingsToday: action.payload,
                copyBookingsToday: action.payload,
            }
        case SET_COPY_BOOKINGS_TODAY:
            return {
                ...state,
                copyBookingsToday: action.payload,
            }
        case OPEN_MODAL_CANCEL:
            return {
                ...state,
                openModalCancel: action.payload,
            }
        case CANCEL_BOOKING:
            return {
                ...state,
                bookingCanceled: action.payload,
                openModalCancel: false,
            }
        case OPEN_SUCCESS_CANCEL:
            return {
                ...state,
                succesCancel: action.payload,
            }
        case CONFIRM_BOOKING:
            return {
                ...state,
                succesConfirmBooking: action.payload,
                textAlertFineOrConfirmBooking: 'Reserva confirmada exitosamente.'
            }
        case GET_BOOKING_BY_STATE_FINED:
            return {
                ...state,
                listFinedBookings: action.payload,
                copyListFinedBookings: action.payload
            }
        case SET_COPY_BOOKING_FINED:
            return {
                ...state,
                copyListFinedBookings: action.payload
            }
        case GET_BOOKING_BY_STATE_CONFIRMED:
            return {
                ...state,
                listConfirmedBookings: action.payload, 
                copyListConfirmedBookings: action.payload
            }
        case SET_SUCCESS_CONFIRM_BOOKING:
            return {
                ...state,
                succesConfirmBooking: action.payload, 
            }
        case FINE_BOOKING:
            return {
                ...state,
                succesFineBooking: !action.payload.deleted,
                textAlertFineOrConfirmBooking: 'Multa realizada correctamente.',
                bookingFined: action.payload,
            }
        case SET_SUCCESS_FINE_BOOKING:
            return {
                ...state,
                succesFineBooking: action.payload,
            }
        case SET_COPY_BOOKINGS_CONFIRMED:
            return {
                ...state,
                copyListConfirmedBookings: action.payload
            }
        case UPDATE_STATE_BOOKING:
            return {
                ...state,
                successUpdateStateBooking: action.payload
            }
        case GET_BOOKINGS_TO_CANCEL:
            return {
                ...state,
                bookingsToCancel: action.payload
            }
        case CANCEL_BOOKING_BY_FINED:
            return {
                ...state,
                bookingCancelledByFined: action.payload
            }
        default: return state
    }

}