import React from 'react'
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { Alert } from '@material-ui/lab';

const AlertMessage = ({
    deskReducer: {
      deskSelected,
      desk
    },
    chairReducer: {
      seatId,
    },
    alertMessageReducer: {
      activeStep
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
    chairReducer: state.chairReducer,
    alertMessageReducer: state.alertMessageReducer,
});

export default connect(mapStateToProps, { })(AlertMessage)