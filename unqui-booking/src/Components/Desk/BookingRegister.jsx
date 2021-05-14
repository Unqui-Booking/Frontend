import React, { useEffect } from 'react';
import { useState } from 'react'
import { connect } from "react-redux";
import { Button, FormControl, InputLabel, Select, MenuItem, FormHelperText, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { registerBooking , getAllBookings} from '../../Actions/bookingActions';
import { setSelectedStartHour, setSelectedEndHour } from '../../Actions/dateHoursActions';
import ScheduleIcon from '@material-ui/icons/Schedule';

 const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexFlow: 'column',
      alignItems: 'center',
      margin: theme.spacing(1),
      minWidth: 120,

    },
    selectTime: {
      margin: theme.spacing(1),
      width: 200,
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));


const BookingRegister = ({
  bookingReducer: {},
  dateHoursReducer: {
    date,
    startHour,
    endHour,
  },
  alertMessageReducer: {
    activeStep,
  },
  registerBooking, 
  getAllBookings,
  setSelectedStartHour,
  setSelectedEndHour,
}) => {

  const classes = useStyles();
  const hours = [9,10,11,12,13,14,15,16,17,18,19,20]

  const handleChangeStartHours = (event) => {
    setSelectedStartHour(event.target.value);
    console.log("INICIO: "+startHour)
  }

  const handleChangeEndHours = (event) => {
    setSelectedEndHour(event.target.value);
    console.log("FIN " +endHour)
  }

  const validateCountHours = () => {
      return (endHour - startHour <= 3) && (endHour > startHour) && (endHour != startHour)
  }

  const getTextHelper = () => {
    let text = ''

    if(endHour - startHour > 3) { text = "El rango horario no puede superar las tres horas" }
      else{ 
        if(startHour > endHour) { text = "La hora fin no puede ser menor a la hora inicio"}
          else{
            if(endHour == startHour) {text = "El rango horario no puede ser menor a una hora"}
          }
      }

    return text;

  }

  const onSaveRegister = () => {
    if (startHour != null && endHour != null) {
      registerBooking("24/04/21", endHour, startHour, 1);
      getAllBookings();
      //ToDo>>> limpiar desk selected
    } else {
      return console.log("error post booking")
    }
  }

  return (
    <>
      <Grid>
          <FormControl className={classes.container}>
              <Grid item>
                <InputLabel id="startTime">Hora inicio</InputLabel>
                <Select
                  disabled={activeStep == 2} 
                  value={startHour}
                  onChange={handleChangeStartHours}
                  displayEmpty
                  labelId="startTime"
                  id="startTime"
                  className={classes.selectTime}
                  IconComponent= {ScheduleIcon}
                  >
                    <MenuItem value={hours[0]}>{hours[0]}:00</MenuItem>
                    {hours.slice(1, hours.length).map(h => <MenuItem value={h}>{h}:00</MenuItem> 
                    )}
                </Select>
              </Grid>
            </FormControl>

          <FormControl className={classes.container}>
            
              <InputLabel id="endTime">Hora fin</InputLabel>
              <Select
                disabled={activeStep == 2} 
                value={endHour}
                labelId="endTime"
                id="endTime"
                onChange={handleChangeEndHours}
                displayEmpty
                className={classes.selectTime}
                IconComponent= {ScheduleIcon}
                >
                  <MenuItem value={hours[0]}>{hours[0]}:00</MenuItem>
                  {hours.slice(1, hours.length).map(h => <MenuItem value={h}>{h}:00</MenuItem> 
                  )}
              </Select>
            {!validateCountHours() ? <FormHelperText color="red">{getTextHelper()}</FormHelperText> : null}
            
            {/* <Button variant="contained" color="primary"  className={classes.margin} onClick={onSaveRegister} disabled={( !validateCountHours() ?  true :  false ) }>Reservar</Button> */}
          
          </FormControl>
      </Grid>
    </>
  );
}

const mapStateToProps = state => ({
  bookingReducer: state.bookingReducer,
  dateHoursReducer: state.dateHoursReducer,
  alertMessageReducer: state.alertMessageReducer,
});

export default connect(mapStateToProps, { registerBooking, getAllBookings, setSelectedStartHour, setSelectedEndHour })(BookingRegister)