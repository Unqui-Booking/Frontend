import { GET_DESKS, LOGS_ERROR  } from './types'
import { DESK_URL } from '../Api/base'
import dataService from '../Services/service'

export const getAllDesks = () => async dispatch => {
    try{
        const res = await dataService.get(DESK_URL)
        dispatch( {
            type: GET_DESKS,
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