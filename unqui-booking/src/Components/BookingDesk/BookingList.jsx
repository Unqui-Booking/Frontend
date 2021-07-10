import React , { useState, useEffect } from 'react'
import moment from 'moment';
import { connect } from 'react-redux';
import { Grid , Snackbar, CardContent, makeStyles, Chip, TextField } from '@material-ui/core'
import { getBookingBySeatAndDate } from '../../Actions/bookingActions'
import { Alert } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
    rangeHours: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    hours: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    borderBox: {
        border: '1px rgba(0, 0, 0, 0.12)',
        borderStyle: 'none none solid none',
    },
    spacing: {
        margin: theme.spacing(1),
    },
    chip: {
        border: '1px solid #d6d6d6',
        borderRadius: '4px',
        padding: '16px',
        margin: '5px',
        color: '#b7002e',
    },
    title: {
        color: '#b7002e',
    },
    textField: {
        border: '0px',
    }
  }));


const BookingList = ({
    
    bookingReducer:{
        bookingsFilteredBySeatDate,
    },
    dateHoursReducer: {
        date,
    },
    chairReducer: {
        seatId
    },
    snackbarReducer:{
        openSnackbar,
      },
    getBookingBySeatAndDate})=>{

        moment.locale('es');  
        const classes = useStyles()
        const [open, setOpen] = useState(openSnackbar);

        useEffect(() => {
            setOpen(openSnackbar);
            getBookingBySeatAndDate(seatId, moment(date).format().split('T')[0].toString())
        }, [])

        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
              return;
            }
            setOpen(false);
        };
        
        return (
            <CardContent>
                <Grid container spacing={3} className={classes.borderBox}>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            id="date"
                            label="Fecha de reserva"
                            type="text"
                            defaultValue={moment(date).format('LL')}
                            disabled
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />                        
                    </Grid>

                    <Grid item xs={12} sm={8} className={classes.rangeHours}>
                        {bookingsFilteredBySeatDate.map(b => 
                            <Grid item className={classes.spacing} key={b.id}>
                                <Chip data-testid='info-booking' size="small" key={b.id} label={`${b.startTime}hs - ${b.endTime}hs`} color="primary" variant="outlined" className={classes.chip} />
                            </Grid>                       
                        )}
                    </Grid>

                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={ {vertical: 'top', horizontal: 'center'} }>
                        <Alert onClose={handleClose} severity="success">
                        <strong>Reserva registrada exitosamente.</strong>
                        </Alert>
                    </Snackbar>

                </Grid>
            </CardContent>
        )
    }

const mapStateToProps = state => ({
    bookingReducer: state.bookingReducer,
    dateHoursReducer: state.dateHoursReducer,
    chairReducer: state.chairReducer,
    snackbarReducer: state.snackbarReducer
});

export default connect(mapStateToProps, { getBookingBySeatAndDate})(BookingList)