import { USER_LOGGED, LOGS_ERROR } from './types';

export const setUserLogged = (stateUser) => dispatch => {
    try{
        dispatch( {
            type: USER_LOGGED,
            payload: stateUser
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