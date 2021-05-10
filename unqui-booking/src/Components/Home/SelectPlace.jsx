import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, CardContent, Step, StepLabel, Button, Grid, Card, Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';
import SelectDesk from './SelectDesk'
import SelectChair from './SelectChair'

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

export default function SelectPlace() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const history = useHistory();

  const handleClick = () => {
      history.push("/desk");
  }

  const handleNext = () => {
    activeStep == 2 ? (handleClick()) : ( setActiveStep((prevActiveStep) => prevActiveStep + 1) )
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

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
        
          <Grid item xs={12}>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
          </Grid>  

          <Grid item xs={12} className={classes.right}> 
            {activeStep !== 0 && (
              <Button onClick={handleBack} className={classes.backButton}>
                Atrás
              </Button>
            )}
            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Reservar' : 'Siguiente'}
            </Button>
          </Grid>
            
        </Grid>
      </CardContent>
    </Card>
  );
}