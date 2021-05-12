import { SET_LOADING, LOGS_ERROR, GET_DESKS, SELECTED_DESK, GET_DESK_BY_AREA_SILENT, GET_DESK_BY_AREA_GENERAL  } from '../Actions/types'

const initialState = {
    loading:true,
    error: null,
    desks:[],
    desksSilent: [],
    desksGeneral: [],
    desk: {},
    deskSelected: false,
}

export default function(state = initialState, action){

    switch(action.type){

        case SET_LOADING:
            return {
            ...state,
            loading: true
            };
        case LOGS_ERROR:
            return {
            ...state,
            error: action.payload
            };
        case GET_DESKS:
            return {
                ...state,
                desks: action.payload,
            }
        case SELECTED_DESK:
            return{
                ...state,
                desk: action.payload,
                deskSelected: true,
            }    
        case GET_DESK_BY_AREA_SILENT:
            return{
                ...state,
                desksSilent: action.payload,
            }
        case GET_DESK_BY_AREA_GENERAL:
            return{
                ...state,
                desksGeneral: action.payload,
            }
        default: return state
    }

}