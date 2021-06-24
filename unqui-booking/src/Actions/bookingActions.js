import { GET_BOOKINGS, 
         LOGS_ERROR, 
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
         UPDATE_STATE_BOOKING
         } from './types';
import { BOOKING_URL } from '../Api/base';
import dataService from '../Services/service';

let today = new Date();
let month = today.getMonth()+1 < 10 ? "0"+ (today.getMonth()+1).toString() : (today.getMonth()+1).toString();
let day = today.getDate() < 10 ? "0"+ today.getDate().toString() : today.getDate();
today = today.getFullYear().toString() + "-" + month + "-" + day;

//TODO >>> revisar si se usa en algún lado
export const getAllBookings = () => async dispatch => {
    try{
        const res = await dataService.get(BOOKING_URL)
        dispatch( {
            type: GET_BOOKINGS,
            payload: res.data
        })
    }
    catch(err){
        dispatch( {
            type: LOGS_ERROR,
            payload: console.log(err),
        })
        console.log(err);
    }
}

//TODO >>> Borrar: yA no se usa en el front sino en el back BORRAR
export const getBookingBySeatDateHours = (seatId, date, startTime, endTime ) => async dispatch => {  
    try{
        const res = await dataService.get(`${BOOKING_URL}/details?seat=${seatId}&date=${date}&startTime=${startTime}&endTime=${endTime}`)
        console.log(`${BOOKING_URL}/details?seat=${seatId}&date=${date}&startTime=${startTime}&endTime=${endTime}`)
        dispatch( {
            type: GET_SPECIFIC_BOOKING,
            payload: res.data
        })
    }
    catch(err){
        dispatch( {
            type: LOGS_ERROR,
            payload: console.log(err),
        })
        console.log(err);
    }
}

//TODO >>> Borrar: yA no se usa en el front sino en el back BORRAR
export const getBookingsByUser = (userId) => async dispatch => {
    console.log(`${BOOKING_URL}/user?user=${userId}`);
    const res = await dataService.get(`${BOOKING_URL}/user?user=${userId}`);
    try{
        dispatch( {
            type: GET_BOOKINGS_BY_USER,
            payload: res.data
        })
    }
    catch(err){
        dispatch( {
            type: LOGS_ERROR,
            payload: console.log(err),
        })
        console.log(err);
    }
}

export const getHistoricalBookingsByUser = (userId) => async dispatch => {
    console.log(`${BOOKING_URL}/historical?user=${userId}`);
    const res = await dataService.get(`${BOOKING_URL}/historical?user=${userId}`);
    try{
        dispatch( {
            type: GET_HISTORICAL_BOOKINGS_BY_USER,
            payload: res.data
        })
    }
    catch(err){
        dispatch( {
            type: LOGS_ERROR,
            payload: console.log(err),
        })
        console.log(err);
    }
}

export const getCurrentsBookingsByUser = (userId) => async dispatch => {
    console.log(`${BOOKING_URL}/current?user=${userId}`);
    const res = await dataService.get(`${BOOKING_URL}/current?user=${userId}`);
    try{
        dispatch( {
            type: GET_CURRENTS_BOOKINGS_BY_USER,
            payload: res.data
        })
    }
    catch(err){
        dispatch( {
            type: LOGS_ERROR,
            payload: console.log(err),
        })
        console.log(err);
    }
}

export const getBookingBySeatAndDate = (seatId, date) => async dispatch => {
    try{
        const res = await dataService.get(`${BOOKING_URL}/sd?seat=${seatId}&date=${date}`)
        console.log(`${BOOKING_URL}/sd?seat=${seatId}&date=${date}`);
        dispatch({
            type: GET_SPECIFIC_BOOKING_BY_SEAT_DATE,
            payload: res.data
        })
    }
    catch(err){
        dispatch( {
            type: LOGS_ERROR,
            payload: console.log(err),
        })
        console.log(err);
    }
}

export const getMapAvailabilySeats = (deskId, date, startTime, endTime) => async dispatch => {
    try{
        console.log(`${BOOKING_URL}/availabled?desk=${deskId}&date=${date}&startTime=${startTime}&endTime=${endTime}`);
        const res = await dataService.get(`${BOOKING_URL}/availabled?desk=${deskId}&date=${date}&startTime=${startTime}&endTime=${endTime}`);
        console.log(`${BOOKING_URL}/availabled?desk=${deskId}&date=${date}&startTime=${startTime}&endTime=${endTime}`);
        dispatch({
            type: GET_MAP_AVAILABILY_SEATS,
            payload: res.data
        })
    }
    catch(err){
        dispatch( {
            type: LOGS_ERROR,
            payload: console.log(err),
        })
        console.log(err);
    }
}

export const registerBooking = (seatId, date, startTime, endTime, userId) => async dispatch => {
    const payloadBooking = {
        seat: {id: seatId},
        date,
        startTime,
        endTime,
        user: {id: userId}
      }
    try{
        const res = await dataService.register(BOOKING_URL, payloadBooking);
        dispatch( {
            type: ADD_BOOKING,
            payload: res.data
        })
    }
    catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: console.log(err)
          });
          console.log(err);
    }
}

export const setCopyHistoricalBookings = (copyBookings) => dispatch => {
    try{
        dispatch({
            type: SET_COPY_HISTORICAL_BOOKINGS,
            payload: copyBookings,
        })
    }
    catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: console.log(err)
          });
          console.log(err);
    }
}

export const getBookingsToday = () => async dispatch => {
    try{
        console.log(`${BOOKING_URL}/today?date=${today}`);
        const res = await dataService.get(`${BOOKING_URL}/today?date=${today}`);
        dispatch({
            type: GET_BOOKINGS_TODAY,
            payload: res.data
        })
    }
    catch(err){
        dispatch( {
            type: LOGS_ERROR,
            payload: console.log(err),
        })
        console.log(err);
    }
}

export const getBookingsTodayByState = (state) => async dispatch => {
    try{
        let TYPE_GET_BY_STATE = null;
        const res = await dataService.get(`${BOOKING_URL}/bystate?date=${today}&state=${state}`)

        state === "fined" ? TYPE_GET_BY_STATE = GET_BOOKING_BY_STATE_FINED : TYPE_GET_BY_STATE = GET_BOOKING_BY_STATE_CONFIRMED;

        dispatch({
            type: TYPE_GET_BY_STATE,
            payload: res.data
        })
    }
    catch(err){
        dispatch( {
            type: LOGS_ERROR,
            payload: console.log(err),
        })
        console.log(err);
    }
}

export const setCopyBookingsConfirmed = (copyBookings) => dispatch => {
    try{
        dispatch({
            type: SET_COPY_BOOKINGS_CONFIRMED,
            payload: copyBookings,
        })
    }
    catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: console.log(err)
          });
          console.log(err);
    }
}

export const setCopyBookingsToday = (copyBookings) => dispatch => {
    try{
        dispatch({
            type: SET_COPY_BOOKINGS_TODAY,
            payload: copyBookings,
        })
    }
    catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: console.log(err)
          });
          console.log(err);
    }
}

export const setOpenModalCancel = (open) => dispatch => {
    try{
        dispatch({
            type: OPEN_MODAL_CANCEL,
            payload: open,
        })
    }
    catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: console.log(err)
          });
          console.log(err);
    }
}

export const setOpenSuccessCancel = (open) => dispatch => {
    try{
        dispatch({
            type: OPEN_SUCCESS_CANCEL,
            payload: open,
        })
    }
    catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: console.log(err)
          });
          console.log(err);
    }
}

export const cancelBooking = (booking) => async dispatch => {
    try{
        const payloadBooking = {
            id: booking.id,
            seat: {id: booking.seat.id},
            date: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime,
            user: {id: booking.user.id},
            state: booking.state,
            deleted: true
          }
        const res = await dataService.register(BOOKING_URL, payloadBooking);
        console.log("CANCELADA: "+res.data.deleted);
        dispatch({
            type: CANCEL_BOOKING,
            payload: res.data.deleted,
        })
    }
    catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: console.log(err)
          });
          console.log(err);
    }
}

export const confirmBooking = (booking) => async dispatch => {
    try{
        const payloadBooking = {
            id: booking.id,
            seat: {id: booking.seat.id},
            date: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime,
            user: {id: booking.user.id},
            state: "confirmed",
            deleted: booking.deleted
          }
        const res = await dataService.register(BOOKING_URL, payloadBooking);
        dispatch({
            type: CONFIRM_BOOKING,
            payload: !res.data.deleted,
        })
    }
    catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: console.log(err)
          });
          console.log(err);
    }
}

export const updateStateBooking = (booking, newState) => async dispatch => {
    try{
        const payloadBooking = {
            id: booking.id,
            seat: {id: booking.seat.id},
            date: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime,
            user: {id: booking.user.id},
            state: newState,
            deleted: booking.deleted
          }
        const res = await dataService.register(BOOKING_URL, payloadBooking);
        dispatch({
            type: UPDATE_STATE_BOOKING,
            payload: !res.data.deleted,
        })
    }
    catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: console.log(err)
          });
          console.log(err);
    }
}

export const setSuccessConfirmBooking = (success) => dispatch => {
    try{
        dispatch({
            type: SET_SUCCESS_CONFIRM_BOOKING,
            payload: success,
        })
    }
    catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: console.log(err)
          });
          console.log(err);
    }
}

export const fineBooking = (booking) => async dispatch => {
    try{
        const payloadBooking = {
            id: booking.id,
            seat: {id: booking.seat.id},
            date: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime,
            user: {id: booking.user.id},
            state: "fined",
            deleted: booking.deleted
          }
        const res = await dataService.register(BOOKING_URL, payloadBooking);
        dispatch({
            type: FINE_BOOKING,
            payload: !res.data.deleted,
        })
    }
    catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: console.log(err)
          });
          console.log(err);
    }
}

export const setSuccessFineBooking = (success) => dispatch => {
    try{
        dispatch({
            type: SET_SUCCESS_FINE_BOOKING,
            payload: success,
        })
    }
    catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: console.log(err)
          });
          console.log(err);
    }
}

export const setCopyFinedBookings = (copyBookings) => dispatch => {
    try{
        dispatch({
            type: SET_COPY_BOOKING_FINED,
            payload: copyBookings,
        })
    }
    catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: console.log(err)
          });
          console.log(err);
    }
}
