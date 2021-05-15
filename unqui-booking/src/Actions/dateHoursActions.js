import { SELECTED_DATE, SELECTED_START_TIME, SELECTED_END_TIME, LOGS_ERROR, } from './types';


export const setSelectedDate = (date) => dispatch => {
    try{
        dispatch( {
            type: SELECTED_DATE,
            payload: date
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

export const setSelectedStartHour = (startTime) => dispatch => {
    try{
        dispatch( {
            type: SELECTED_START_TIME,
            payload: startTime
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

export const setSelectedEndHour = (endTime) => dispatch => {
    try{
        dispatch( {
            type: SELECTED_END_TIME,
            payload: endTime
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