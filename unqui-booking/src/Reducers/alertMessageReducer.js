import { SET_LOADING, LOGS_ERROR, ACTIVE_STEP } from '../Actions/types'

const initialState = {
    loading: true,
    error: null,
    activeStep: null,
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
        case ACTIVE_STEP:
            return {
                ...state,
                activeStep: action.payload,
            }

        default: return state
    }

}