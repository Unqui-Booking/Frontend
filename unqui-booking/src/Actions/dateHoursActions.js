import { SELECTED_DATE, SELECTED_START_HOUR, SELECTED_END_HOUR, LOGS_ERROR, } from './types';


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

export const setSelectedStartHour = (startHour) => dispatch => {
    try{
        dispatch( {
            type: SELECTED_START_HOUR,
            payload: startHour
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

export const setSelectedEndHour = (endHour) => dispatch => {
    try{
        dispatch( {
            type: SELECTED_END_HOUR,
            payload: endHour
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