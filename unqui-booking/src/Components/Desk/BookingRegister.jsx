import React from 'react';
import { useState } from 'react'
import { connect } from "react-redux";
import { TextField, Button, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { registerBooking , getAllBookings} from '../../Actions/bookingActions'

 const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexFlow: 'column',
      alignItems: 'center',

    },
    textField: {
      margin: theme.spacing(2),
      width: 200,
    },
  }));


const BookingRegister = ({
  bookingReducer: {},
  registerBooking, 
  getAllBookings,
}) => {

 
  const [startHour, setStartHour] = useState();
  const [endHour, setEndtHour] = useState();
  const classes = useStyles();

  const handleChangeStartHours = (valueSelectStartHour) => {
    const hours = (valueSelectStartHour.target.value).split(":")[0];
    setStartHour(hours)
  }

  const handleChangeEndHours = (valueSelectEndHour) => {
    const hours = (valueSelectEndHour.target.value).split(":")[0];
    setEndtHour(hours)
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
    <Card>
      <CardContent>
        <form className={classes.container} noValidate>
          <TextField
            id="time"
            label="Hora inicial de reserva"
            type="time"
            defaultValue="08:00"
            onChange={handleChangeStartHours}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
          <TextField
            id="time"
            label="Hora final de reserva"
            type="time"
            defaultValue="21:00"
            onChange={handleChangeEndHours}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 3000, // 5 min
            }}
          />
          <Button variant="contained" color="primary" onClick={onSaveRegister}>Reservar</Button>

        </form>
      </CardContent>
    </Card>
  );
}

const mapStateToProps = state => ({
  bookingReducer: state.bookingReducer,

});

export default connect(mapStateToProps, { registerBooking, getAllBookings })(BookingRegister)