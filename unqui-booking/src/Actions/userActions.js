import { FAILED_LOGIN, GET_USER, LOGS_ERROR, ADD_USER } from './types';
import { USER_URL } from '../Api/base'
import dataService from '../Services/service'

export const setFailedLogin = (failedLogin) => dispatch => {
    try{
        dispatch( {
            type: FAILED_LOGIN,
            payload: failedLogin
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

export const getUser = (mail, password) => async dispatch => {
    try{
        let resUser;
        const res = await dataService.get(`${USER_URL}/login?mail=${mail}&password=${password}`)
        console.log(`${USER_URL}/login?mail=${mail}&password=${password}`);
        resUser = res.data[0];
        dispatch( {
            type: GET_USER,
            payload: resUser
        })
        return resUser;
    }
    catch(err){
        dispatch( {
            type: LOGS_ERROR,
            payload: console.log(err),
        })
        console.log(err);
        console.log("no se pudo loguear");
    }
}

export const registerUser = (name, mail, password) => async dispatch => {
    const payloadUser = {
        name,
        mail,
        password,
    }
    try{
        let userRegistered;
        const res = await dataService.register(USER_URL, payloadUser);
        userRegistered = res.data
        dispatch( {
            type: ADD_USER,
            payload: userRegistered
        })
        return userRegistered;
    }
    catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: console.log(err)
          });
          console.log(err);
    }
}