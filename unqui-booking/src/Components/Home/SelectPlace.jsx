import React, {useState} from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, CardContent, Step, StepLabel, Button, Grid, Card, Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';
import SelectDesk from './SelectDesk'
import SelectChair from './SelectChair'
import AlertMessage from './AlertMessage';
import { setActiveStep } from '../../Actions/alertMessageActions';
import { registerBooking, getBookingBySeatDateHours, getBookingBySeatAndDate } from '../../Actions/bookingActions';
import Confirmation from './Confirmation';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  right: {
    display: 'flex',
    justifyContent: "flex-end",
  },
}));



const SelectPlace = ({
  deskReducer: {
    deskSelected,
    desk
  },
  chairReducer: {
    seatSelected,
    seatId
  },
  dateHoursReducer: {
    date,
    startTime,
    endTime
  },
  bookingReducer: {
    bookingsFiltered,
  },
  setActiveStep,
  registerBooking,
  getBookingBySeatDateHours,
  getBookingBySeatAndDate }) => {

  const getSteps = () => {
    return ['Seleccionar escritorio', 'Seleccionar asiento', 'Confirmación'];
  }
    

  const classes = useStyles();
  const [activeStep, setCurrentStep] = useState(0);
  const steps = getSteps();
  const history = useHistory();

  
  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <SelectDesk/>;
      case 1:
        return <SelectChair/>;
      case 2:
        return <Confirmation desk={desk} seat={seatId} date={date} startTime={startTime} endTime={endTime} bookingsFiltered={bookingsFiltered}/>;
      default:
        return 'Sin contenido';
    }
  }

  const handleNext = () => {
    switch(activeStep){
      case 0:
        setCurrentStep((prevActiveStep) => prevActiveStep + 1);
        setActiveStep(activeStep + 1);
        break;
      case 1:
        getBookingBySeatDateHours(seatId, moment(date).format().split('T')[0].toString(), startTime, endTime);
        setCurrentStep((prevActiveStep) => prevActiveStep + 1);
        setActiveStep(activeStep + 1);
        break;
      case 2:
        onSaveRegister()
        history.push("/desk");
        break;
      default:
        console.log("No action for current step");
        break;
    }
  }

  const onSaveRegister = () => {
    if (startTime != null && endTime != null) {
      registerBooking(seatId, moment(date).format().split('T')[0].toString(), startTime, endTime);
      getBookingBySeatAndDate(seatId, moment(date).format().split('T')[0].toString());
      //ToDo>>> limpiar desk selected
    } else {
      return console.log("error post booking")
    }
  }


  const handleBack = () => {
    setCurrentStep((prevActiveStep) => prevActiveStep - 1);
    setActiveStep(activeStep - 1);
  };

  const handleDisabled = (activeStep) => {
    switch(activeStep){
      case 0:
        return !deskSelected; 
        break;
      case 1:
        return !seatSelected; 
        break;
      case 2:
        return !(bookingsFiltered.length == 0);
        break;
      default:
          return false;
    }
  }

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>   

          <Grid item xs={12}>
            <Stepper activeStep={activeStep}>
              {steps.map((label) => {
                return (
                  <Step key={label} >
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Grid>
          <AlertMessage activeStep={activeStep} />
          <Grid item xs={12}>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
          </Grid>  

          <Grid item xs={12} className={classes.right}> 
            {activeStep !== 0 && (
              <Button onClick={handleBack} className={classes.backButton}>
                Atrás
              </Button>
            )}
            <Button variant="contained" color="primary" onClick={handleNext} disabled={handleDisabled(activeStep)}>
              {activeStep === steps.length - 1 ? 'Reservar' : 'Siguiente'}
            </Button>
              {/* TODO >>> limpiar el state del desk seleccionado y los horarios, la fecha dejarla */}
          </Grid>
            
        </Grid>
      </CardContent>
    </Card>
  );
}

const mapStateToProps = state => ({
  deskReducer: state. deskReducer,
  chairReducer: state.chairReducer,
  dateHoursReducer: state.dateHoursReducer,
  bookingReducer: state.bookingReducer,
});

export default connect(mapStateToProps, { setActiveStep, getBookingBySeatDateHours, registerBooking, getBookingBySeatAndDate })(SelectPlace)