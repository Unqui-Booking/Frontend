import React, { useState } from 'react'
import { connect } from 'react-redux';
import moment from 'moment';
import { Grid, Container, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import SelectPlace from './SelectPlace/SelectPlace';
import BookingRegister from './BookingRegister';
import { setSelectedDate } from  '../../Actions/dateHoursActions';
import { getMapAvailabilySeats } from '../../Actions/bookingActions';
import { isFinedUserAtDate } from '../../Actions/userActions';
import { useEffect } from 'react';
import FinedStudent from '../Student/FinedStudent';
import CircularProgress from '@material-ui/core/CircularProgress';
import DateFnsUtils from '@date-io/date-fns';
import deLocale from "date-fns/locale/es";


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

const HomeStudent = ({

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
    userReducer: {
        user,
    },
    setSelectedDate,
    getMapAvailabilySeats,
    isFinedUserAtDate

    }) => {

    const classes = useStyles();
    const [finedUser, setFinedUser] = useState();
    const [dateLimit, setDateLimit] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        setInfoFined(user.id);
    }, [])

    const setInfoFined = async (userId) => {
        let infoFined = await isFinedUserAtDate(moment(new Date()).format().split('T')[0], userId);
        let isFined =  infoFined.fined;
        let dateLimit =  infoFined.dateLimit;
        setFinedUser(isFined);
        setDateLimit(dateLimit);
        setLoading(false);
    } 

    const filterDays = (date) => {
        const today = new Date();
        //|| date.getDay() === 6 
        return date.getDay() === 0 || date.getDate() > (today.getDate() + 14);
      }
    
    const handleOnChange = (date) => {
        setSelectedDate(date);
        if(desk != null){ //si selecciono el cambio de fecha en el paso 2
            getMapAvailabilySeats(desk.id, moment(date).format().split('T')[0], startTime, endTime);
        }
    }
  
    return (
        loading ? <CircularProgress size={24} className={classes.buttonProgress} /> :
        <Container maxWidth="md">    
            {finedUser ? 
                <FinedStudent dateLimit={dateLimit}/> :
                <Grid container className={classes.root} justifyContent="center" > 
                    <Grid item xs={12}>
                        <Typography variant='h4' data-testid='title-home-student' className={classes.title}> Sistema de gestión de reservas de escritorios</Typography>
                    </Grid>
                    <Grid item xs={6} justifyContent="center" className={classes.flex}>
                        <MuiPickersUtilsProvider locale={deLocale} utils={DateFnsUtils}  >
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
                                disablePast={true}
                                shouldDisableDate={filterDays}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={6} justifyContent="center" className={classes.flex}>
                        <BookingRegister/>
                    </Grid>
                    <Grid item xs={12}>
                        <SelectPlace/>
                    </Grid>
                </Grid>
            }
        </Container>  
    )}

const mapStateToProps = state => ({
    dateHoursReducer: state.dateHoursReducer,
    alertMessageReducer: state.alertMessageReducer,
    deskReducer: state.deskReducer,
    userReducer: state.userReducer,
});
    
export default connect(mapStateToProps, { setSelectedDate, getMapAvailabilySeats, isFinedUserAtDate })(HomeStudent);