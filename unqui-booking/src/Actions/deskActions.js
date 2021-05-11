import { GET_DESKS, LOGS_ERROR, SELECTED_DESK, GET_DESK_BY_AREA_SILENT, GET_DESK_BY_AREA_GENERAL  } from './types'
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

export const setSelectedDesk = (desk) => dispatch => {
    try{
        dispatch( {
            type: SELECTED_DESK,
            payload: desk
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

export const getDeskByArea = (area) => async dispatch => {
    try{
        let TYPE_AREA = null;
        const res = await dataService.get(`${DESK_URL}/query?area=${area}`)

        area === "silent" ? TYPE_AREA = GET_DESK_BY_AREA_SILENT : TYPE_AREA = GET_DESK_BY_AREA_GENERAL;

        dispatch( {
            type: TYPE_AREA,
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

