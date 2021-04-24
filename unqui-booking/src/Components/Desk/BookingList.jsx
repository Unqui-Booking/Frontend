import React, {useState, useEffect} from 'react'
import bookingProvider from '../../Api/booking'
import { Grid , Typography, Divider, CardContent} from '@material-ui/core'

const BookingList = () => {

    const [bookings, setBooking] = useState([])

    useEffect(()=>{
        bookingProvider.getAll().then(bookings => {
            setBooking(bookings)
        })
    }, [setBooking])


    return (
        <CardContent>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant='h5'> Reservas registradas </Typography>
                    <Divider></Divider>
                </Grid>
                {bookings.map(b => 
                    <Grid item xs={12} key={b}>
                        <p>{b.startTime}hs - {b.endTime}hs</p>
                        <Divider></Divider>
                    </Grid>
                )}
            </Grid>
        </CardContent>
    )
}
 
export default BookingList