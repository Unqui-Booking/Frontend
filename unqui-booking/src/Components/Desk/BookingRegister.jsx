import React, { useEffect } from 'react';
import { useState } from 'react'
import { connect } from "react-redux";
import moment from 'moment';
import { Button, FormControl, InputLabel, Select, MenuItem, FormHelperText, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { registerBooking , getAllBookings, getMapAvailabilySeats} from '../../Actions/bookingActions';
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
    startTime,
    endTime,
  },
  alertMessageReducer: {
    activeStep,
  },
  deskReducer: {
    desk,
  },
  registerBooking, 
  getAllBookings,
  setSelectedStartHour,
  setSelectedEndHour,
  getMapAvailabilySeats,
}) => {

  const classes = useStyles();
  const hours = [9,10,11,12,13,14,15,16,17,18,19,20]

  const handleChangeStartHours = (event) => {
    setSelectedStartHour(event.target.value);
    if(desk != null){ //si selecciono el cambio de fecha en el paso 2 o en el paso 1 una vez que se seleccionó un desk
      getMapAvailabilySeats(desk.id, moment(date).format().split('T')[0], event.target.value, endTime);
    }
  }

  const handleChangeEndHours = (event) => {
    setSelectedEndHour(event.target.value);
    if(desk != null){ //si selecciono el cambio de fecha en el paso 2 o en el paso 1 una vez que se seleccionó un desk
      getMapAvailabilySeats(desk.id, moment(date).format().split('T')[0], startTime, event.target.value);
    }
  }

  const validateCountHours = () => {
      return (endTime - startTime <= 3) && (endTime > startTime) && (endTime != startTime)
  }

  const getTextHelper = () => {
    let text = ''

    if(endTime - startTime > 3) { text = "El rango horario no puede superar las tres horas" }
      else{ 
        if(startTime > endTime) { text = "La hora fin no puede ser menor a la hora inicio"}
          else{
            if(endTime == startTime) {text = "El rango horario no puede ser menor a una hora"}
          }
      }

    return text;

  }

  return (
    <>
      <Grid>
          <FormControl className={classes.container}>
              <Grid item>
                <InputLabel id="startTime">Hora inicio</InputLabel>
                <Select
                  disabled={activeStep == 2} 
                  value={startTime}
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
                value={endTime}
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
            
          </FormControl>
      </Grid>
    </>
  );
}

const mapStateToProps = state => ({
  bookingReducer: state.bookingReducer,
  dateHoursReducer: state.dateHoursReducer,
  alertMessageReducer: state.alertMessageReducer,
  deskReducer: state.deskReducer,
});

export default connect(mapStateToProps, { registerBooking, getAllBookings, setSelectedStartHour, setSelectedEndHour, getMapAvailabilySeats })(BookingRegister)