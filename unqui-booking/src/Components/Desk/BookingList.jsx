import React , { useEffect } from 'react'
import { connect } from 'react-redux';
import { Grid , Typography, Divider, CardContent } from '@material-ui/core'
import { getAllBookings } from '../../Actions/bookingActions'

const BookingList = ({
    
    bookingReducer:{
        bookings,
    },
    getAllBookings})=>{

        useEffect(() => {
            getAllBookings()
        }, [])

        return (
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant='h5'> Reservas registradas </Typography>
                        <Divider></Divider>
                    </Grid>
                    {bookings.map(b => 
                        <Grid item xs={12} key={b.id}>
                            <p>{b.startTime}hs - {b.endTime}hs</p>
                            <Divider></Divider>
                        </Grid>
                    )}
                </Grid>
            </CardContent>
        )
        
    }

const mapStateToProps = state => ({
    bookingReducer: state.bookingReducer,

});

export default connect(mapStateToProps, { getAllBookings, })(BookingList)