import React, { useEffect } from 'react';
import { useState } from 'react'
import { connect } from "react-redux";
import moment from 'moment';
import { FormControl, InputLabel, Select, MenuItem, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getMapAvailabilySeats} from '../../Actions/bookingActions';
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
  bookingReducer: {
    mapAvailabilySeats
  },
  dateHoursReducer: {
    date,
    startTime,
    endTime,
    timeDisabled,
  },
  alertMessageReducer: {
    activeStep,
  },
  deskReducer: {
    desk,
  },
  setSelectedStartHour,
  setSelectedEndHour,
  getMapAvailabilySeats,
}) => {

  const classes = useStyles();
  const hoursStart = [9,10,11,12,13,14,15,16,17,18,19]
  const hoursEnd = [9,10,11,12,13,14,15,16,17,18,19,20]

  const handleChangeStartHours = (event) => { 
    setSelectedStartHour(event.target.value);
    console.log("MAP ANTES: "+mapAvailabilySeats);
    if(desk != null){ //si selecciono el cambio de fecha en el paso 2 o en el paso 1 una vez que se seleccionó un desk
      getMapAvailabilySeats(desk.id, moment(date).format().split('T')[0], event.target.value, endTime);
    }
    console.log("MAP ahora: "+mapAvailabilySeats);
  }

  const handleChangeEndHours = (event) => {
    setSelectedEndHour(event.target.value);
    if(desk != null){ //si selecciono el cambio de fecha en el paso 2 o en el paso 1 una vez que se seleccionó un desk
      getMapAvailabilySeats(desk.id, moment(date).format().split('T')[0], startTime, event.target.value);
    }
    console.log(event.target.value);
  }

  const getDisabilityEndTime = (h) => {
    return !timeDisabled.includes(h);
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
                    <MenuItem value={hoursStart[0]}>{hoursStart[0]}:00</MenuItem>
                    {hoursStart.slice(1, hoursStart.length).map(h => <MenuItem key={h} value={h}>{h}:00</MenuItem> 
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
                  <MenuItem value={hoursEnd[0]} disabled={getDisabilityEndTime(hoursEnd[0])}>
                      {hoursEnd[0]}:00
                  </MenuItem>
                  {hoursEnd.slice(1, hoursEnd.length).map(h => <MenuItem key={h} value={h} disabled={getDisabilityEndTime(h)}>{h}:00</MenuItem> 
                  )}
              </Select>
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

export default connect(mapStateToProps, { setSelectedStartHour, setSelectedEndHour, getMapAvailabilySeats })(BookingRegister)