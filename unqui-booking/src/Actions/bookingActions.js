import { GET_BOOKINGS, LOGS_ERROR, ADD_BOOKING, GET_SPECIFIC_BOOKING, GET_SPECIFIC_BOOKING_BY_SEAT_DATE } from './types';
import { BOOKING_URL } from '../Api/base'
import dataService from '../Services/service'

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


export const registerBooking = (seatId, date, startTime, endTime) => async dispatch => {
    const payloadBooking = {
        seat: {id: seatId},
        date,
        startTime,
        endTime,
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

