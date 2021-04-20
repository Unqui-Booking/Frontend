import React from 'react';
import { TextField, Button, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

export default function BookingRegister() {

  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <form className={classes.container} noValidate>
            <TextField
              id="time"
              label="Hora inicial de reserva"
              type="time"
              defaultValue="07:30"
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
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
            <Button variant="contained" color="primary">Reservar</Button>
          
        </form>
      </CardContent>
    </Card>
  );
}
