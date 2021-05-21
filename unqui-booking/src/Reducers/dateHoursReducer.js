import { SET_LOADING, LOGS_ERROR, SELECTED_DATE, SELECTED_START_TIME, SELECTED_END_TIME,   } from '../Actions/types'

const initialState = {
    loading:true,
    error: null,
    date: new Date(),
    startTime: 9,
    endTime: 10,
    timeDisabled: [10, 11, 12]
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
        case SELECTED_START_TIME:
            return{
                ...state,
                startTime: action.payload,
                timeDisabled: [action.payload + 1, action.payload + 2, action.payload + 3]
            }    
        case SELECTED_END_TIME:
            return{
                ...state,
                endTime: action.payload,
            }
        default: return state
    }

}