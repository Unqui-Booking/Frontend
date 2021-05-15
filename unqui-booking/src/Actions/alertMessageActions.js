import { LOGS_ERROR, ACTIVE_STEP} from './types';

export const setActiveStep = (activeStep) => dispatch => {
    try{
        dispatch( {
            type: ACTIVE_STEP,
            payload: activeStep
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