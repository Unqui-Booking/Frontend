import React , { useEffect } from 'react'
import moment from 'moment';
import { connect } from 'react-redux';
import { Grid , Typography, Divider, CardContent, makeStyles, Chip, TextField } from '@material-ui/core'
import { getBookingBySeatAndDate } from '../../Actions/bookingActions'

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
        startTime,
        endTime
    },
    chairReducer: {
        seatId
    },
    getBookingBySeatAndDate})=>{

        const classes = useStyles()

       /*  useEffect(() => {
            getBookingBySeatDateHours(seatId, moment(date).format().split('T')[0].toString(), startTime, endTime)
        }, []) */

        moment.locale('es');  
        
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
                            <Grid item className={classes.spacing}>
                                <Chip size="small" key={b.id} label={`${b.startTime}hs - ${b.endTime}hs`} color="primary" variant="outline" className={classes.chip} />
                            </Grid>                       
                            
                        )}
                    </Grid>
                </Grid>
            </CardContent>
        )
        
    }

const mapStateToProps = state => ({
    bookingReducer: state.bookingReducer,
    dateHoursReducer: state.dateHoursReducer,
    chairReducer: state.chairReducer
});

export default connect(mapStateToProps, { getBookingBySeatAndDate})(BookingList)