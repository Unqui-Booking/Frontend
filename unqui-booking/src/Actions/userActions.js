import { FAILED_LOGIN, GET_USER, LOGS_ERROR, USER_EXISTS, ADD_USER } from './types';
import { USER_URL } from '../Api/base'
import dataService from '../Services/service'

export const setFailedLogin = (stateUser) => dispatch => {
    try{
        dispatch( {
            type: FAILED_LOGIN,
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
        //window.location.href = "http://localhost:3000/home";
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

// export const setUser = (user) => dispatch => {
//     try{
//         dispatch( {
//             type: SET_USER,
//             payload: user,
//         })
//     }
//     catch(err){
//         dispatch( {
//             type: LOGS_ERROR,
//             payload: console.log(err),
//         })
//         console.log(err);
//     }
    
// }


export const setUserExists = (arrayUser) => dispatch => {
    try{
        dispatch( {
            type: USER_EXISTS,
            payload: arrayUser.length > 0,
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

export const registerUser = (name, mail, password) => async dispatch => {
    const payloadUser = {
        name,
        mail,
        password,
    }
    try{
        const res = await dataService.register(USER_URL, payloadUser);
        dispatch( {
            type: ADD_USER,
            payload: res.data
        })
    }
    catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: console.log(err)
          });
          console.log(err);
    }
}