import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import HomeStudent from '../Student/HomeStudent';
import HomeAdmin from '../Admin/HomeAdmin';

const HomeMain = ({
    userReducer: {
        user
    }
}) => { 
    
    useEffect( () => {
        window.localStorage.setItem('user', JSON.stringify(user))
        //TODO >>> consumir el user en todo el proyecto desde este storage
        // PARA OBTENERLO COMO OBJETO >>> JSON.parse(localStorage.getItem('user'))
    }, [])
    
    return ( user.admin ? <HomeAdmin /> : <HomeStudent /> ) }

const mapStateToProps = state => ({
    userReducer: state.userReducer,
})

export default connect(mapStateToProps, { }) (HomeMain);