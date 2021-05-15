import { SNACKBAR, LOGS_ERROR } from './types';


export const handleOpen = (open) => dispatch => {
    try{
        dispatch( {
            type: SNACKBAR,
            payload: open
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