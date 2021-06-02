import React  from 'react'
import { connect } from 'react-redux';

const Student = ({
    userReducer: {
        user
    }

}) => {
    return (
    <p>Perfil de estudiante
    {console.log("USER DESDE PROFILE: "+ user)}</p>
    )
}

const mapStateToProps = state => ({
    userReducer: state.userReducer,
});

export default connect(mapStateToProps, { })(Student);