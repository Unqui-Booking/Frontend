import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
}))


const Home = () => {

    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Grid container className={classes.root} justify="center">
            <Grid item xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Seleccionar fecha de reserva"
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        disablePast={true}
                    />
                </MuiPickersUtilsProvider>
            </Grid>
        </Grid>
        </Container>
        
    )
}
 
export default Home