import React from 'react'
import { Grid, Container, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import SelectPlace from './SelectPlace'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      flex: {
          display: "flex",
      },
      title: {
        padding: "2rem",
        textAlign: "center",
      },
      area: {
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          border: "6px",
          borderStyle: "outset",
          paddingTop: "1rem",
      },
      dateSelect: {
          marginBottom: "2rem",
      },

}))

const Home = () => {

    const classes = useStyles();
    var date = new Date();
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    
    return (
        <Container maxWidth="md">
            <Grid container className={classes.root} justify="center" > 
                <Grid item xs={12}>
                    <Typography variant='h4' className={classes.title}> Sistema de gestión de reservas de escritorios</Typography>
                </Grid>
                <Grid item xs={12} justify="center" className={classes.flex}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                        <KeyboardDatePicker
                            className={classes.dateSelect}
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Seleccionar fecha de reserva"
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            onChange={console.log("fecha seleccionada")}
                            disablePast={true}
                            maxDate={lastDay}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12}>
                    <SelectPlace></SelectPlace>
                </Grid>
        </Grid>
        </Container>
        
    )
    }
 
export default Home;