import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import HomeStudent from '../Student/HomeStudent';
import HomeAdmin from '../Admin/HomeAdmin';
import { Redirect } from "react-router-dom";

const HomeMain = ({
    userReducer: {
        user
    }
}) => { 
    
    useEffect( ()  => {
        redirectPage();
   }, [])

   const redirectPage = ()  => {
       if(!user){  window.location.href = 'http://localhost:3001/' }
   }
    
    return (  user ? 
                <div>
                    { user.admin ? 
                        <HomeAdmin /> : <HomeStudent /> 
                    }
                </div> : <Redirect to="/"/>
            ) 

}

const mapStateToProps = state => ({
    userReducer: state.userReducer,
})

export default connect(mapStateToProps, { }) (HomeMain);