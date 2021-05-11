import { GET_CHAIR_BY_DESK, LOGS_ERROR } from './types';
import { CHAIR_URL } from '../Api/base'
import dataService from '../Services/service'

export const getChairByDesk = (idDesk) => async dispatch => {
    try{
        const res = await dataService.get(`${CHAIR_URL}/query?desk=${idDesk}`)

        dispatch( {
            type: GET_CHAIR_BY_DESK,
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