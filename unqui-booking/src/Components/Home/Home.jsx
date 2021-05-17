import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import moment from 'moment';
import { Grid, Container, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import SelectPlace from './SelectPlace'
import BookingRegister from '../Desk/BookingRegister';
import { setSelectedDate } from  '../../Actions/dateHoursActions';
import { getMapAvailabilySeats } from '../../Actions/bookingActions';

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

const Home = ({

    dateHoursReducer: {
        date,
        startTime,
        endTime
    },
    alertMessageReducer: {
        activeStep,
    },
    deskReducer: {
        desk
    },
    setSelectedDate,
    getMapAvailabilySeats,

    }) => {

       /*  useEffect( () => {
            setSelectedDate(new Date());
        }, []) */

    const classes = useStyles();

    const filterDays = (date) => {
        const today = new Date();
        return date.getDay() === 0 || date.getDay() === 6 || date.getDate() > (today.getDate() + 14);
      }
    
    const handleOnChange = (date) => {
        setSelectedDate(date);
        if(desk != null){ //si selecciono el cambio de fecha en el paso 2
            getMapAvailabilySeats(desk.id, moment(date).format().split('T')[0], startTime, endTime);
        }
        
    }
  
    return (
        <Container maxWidth="md">
            <Grid container className={classes.root} justify="center" > 
                <Grid item xs={12}>
                    <Typography variant='h4' className={classes.title}> Sistema de gestión de reservas de escritorios</Typography>
                </Grid>
                <Grid item xs={6} justify="center" className={classes.flex}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                        <KeyboardDatePicker
                            disabled={ activeStep == 2  }
                            className={classes.dateSelect}
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            value={date}
                            label="Seleccionar fecha de reserva"
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            onChange={handleOnChange}
                            //disablePast={true}
                            //shouldDisableDate={filterDays}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={6} justify="center" className={classes.flex}>
                    <BookingRegister/>
                </Grid>
                <Grid item xs={12}>
                    <SelectPlace></SelectPlace>
                </Grid>
        </Grid>
        </Container>  
    )}

const mapStateToProps = state => ({
    dateHoursReducer: state.dateHoursReducer,
    alertMessageReducer: state.alertMessageReducer,
    deskReducer: state.deskReducer
});
    
export default connect(mapStateToProps, { setSelectedDate, getMapAvailabilySeats })(Home)