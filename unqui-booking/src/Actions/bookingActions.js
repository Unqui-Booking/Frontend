import { GET_BOOKINGS, LOGS_ERROR, ADD_BOOKING } from './types';
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

export const registerBooking = (date, endTime, startTime, desk) => dispatch => {
    const payloadBooking = {
        date,
        endTime,
        startTime,
        desk_id: desk
      }
    try{
        const res = dataService.register(BOOKING_URL, payloadBooking);
        dispatch( {
            type: ADD_BOOKING,
            payload: res.data
        })
        return Promise.resolve(res.data);
    }
    catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: console.log(err)
          });
          return Promise.reject(err);
    }
}
