import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react'
//TODO >>> guardar en un reducer el activeStep
const AlertMessage = ({
    deskReducer: {
        deskSelected,
        activeStep,
        desk
    }

    })=> {

    const getText = (activeStep) => {
        switch (activeStep) {
            case 0:
              return  `Escritorio seleccionado: ${desk.nameDesk}`;
            case 1:
              return "Asiento seleccionado";
            default:
              return 'Sin seleccióm';
          }
    }

    const getCondition = (activeStep) => {
        switch (activeStep) {
            case 0:
              return deskSelected;
            case 1:
              return false;
            default:
              return false;
          }
    }

    return (
        <Grid item sm={12}>
            { getCondition(activeStep) ?
                
                <Alert severity="success" >
                {getText(activeStep)}
                </Alert>
                : null
            }
        </Grid> 
    )
}

const mapStateToProps = state => ({
    deskReducer: state.deskReducer,

});

export default connect(mapStateToProps, { })(AlertMessage)