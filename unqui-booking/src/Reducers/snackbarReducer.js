import { SET_LOADING, LOGS_ERROR, SNACKBAR } from '../Actions/types'

const initialState = {
    loading: true,
    error: null,
    openSnackbar: false,
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
        case SNACKBAR:
            return {
            ...state,
            openSnackbar: action.payload,
            }

        default: return state
    }

}