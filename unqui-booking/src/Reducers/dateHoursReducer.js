import { SET_LOADING, LOGS_ERROR, SELECTED_DATE, SELECTED_START_HOUR, SELECTED_END_HOUR  } from '../Actions/types'

const initialState = {
    loading:true,
    error: null,
    date: null,
    startHour: 9,
    endHour: 10
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
        case SELECTED_DATE:
            return {
                ...state,
                date: action.payload,
            }
        case SELECTED_START_HOUR:
            return{
                ...state,
                startHour: action.payload,
            }    
        case SELECTED_END_HOUR:
            return{
                ...state,
                endHour: action.payload,
            }
        default: return state
    }

}