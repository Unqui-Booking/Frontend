import React, {useState, useEffect} from 'react'
import { Grid, Container , Card } from '@material-ui/core'
import BookingList from './BookingList'
import BookingHeader from './BookingHeader'
import { makeStyles } from '@material-ui/core/styles'
import bookingProvider from '../../Api/booking'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(3,'auto'),
    }
}))

const BookingHome = () => {

    const classes = useStyles();

    const [bookings, setBooking] = useState([])
    const [bookingCopy, setBookingCopy] = useState([]);

    useEffect(()=>{
        initBooking()
    }, [])

    const initBooking = ()=>{
        bookingProvider.getAll().then(bookings => {
            setBooking(bookings)
        })
    }

    return (
        <Container maxWidth="md">
            <Grid container className={classes.root} justify="center">
            <Grid item xs={12}>
                <Card>
                    <BookingHeader initBooking={initBooking}></BookingHeader>
                    <BookingList bookings={bookings} getAllBookings={initBooking}></BookingList>
                </Card>
            </Grid>
        </Grid>
        </Container>
        
    )
}
 
export default BookingHome