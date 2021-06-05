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
         CANCEL_BOOKING, } from './types';
import { BOOKING_URL } from '../Api/base'
import dataService from '../Services/service'

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
        {console.log(`${BOOKING_URL}/details?seat=${seatId}&date=${date}&startTime=${startTime}&endTime=${endTime}`)}
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

export const getBookingsToday = (date) => async dispatch => {
    try{
        console.log(`${BOOKING_URL}/bydate?date=${date}`);
        const res = await dataService.get(`${BOOKING_URL}/bydate?date=${date}`);
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

export const cancelBooking = (booking) => async dispatch => {
    try{
        const payloadBooking = {
            id: booking.id,
            seat: {id: booking.seat.id},
            date: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime,
            user: {id: booking.user.id},
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