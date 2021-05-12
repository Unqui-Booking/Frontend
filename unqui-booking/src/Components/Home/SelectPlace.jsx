import React, {useState} from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, CardContent, Step, StepLabel, Button, Grid, Card, Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';
import SelectDesk from './SelectDesk'
import SelectChair from './SelectChair'
import AlertMessage from './AlertMessage';
import { setActiveStep } from '../../Actions/alertMessageActions';

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

function getSteps() {
  return ['Seleccionar escritorio', 'Seleccionar asiento', 'Confirmación'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <SelectDesk></SelectDesk>;
    case 1:
      return <SelectChair></SelectChair>;
    case 2:
      return 'Información de escritorio y asiento';
    default:
      return 'Sin contenido';
  }
}

const SelectPlace = ({
  deskReducer: {
    deskSelected
  },
  chairReducer: {
    seatSelected
  },
  setActiveStep }) => {

  const classes = useStyles();
  const [activeStep, setCurrentStep] = useState(0);
  const steps = getSteps();
  const history = useHistory();

  const handleClick = () => {
      history.push("/desk");
  }

  const handleNext = () => {
    if(activeStep == 2){
      handleClick()
    }else{
      setCurrentStep((prevActiveStep) => prevActiveStep + 1);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
        return false //return habilitado para reservar == true;
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
          </Grid>
            
        </Grid>
      </CardContent>
    </Card>
  );
}

const mapStateToProps = state => ({
  deskReducer: state. deskReducer,
  chairReducer: state.chairReducer
});

export default connect(mapStateToProps, { setActiveStep })(SelectPlace)