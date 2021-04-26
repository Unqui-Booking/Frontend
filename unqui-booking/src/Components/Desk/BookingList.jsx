import React from 'react'
import { Grid , Typography, Divider, CardContent, IconButton} from '@material-ui/core'
import CachedIcon from '@material-ui/icons/Cached';

const BookingList = (props) => {

    return (
        <CardContent>
            <Grid container spacing={3}>
                <Grid item xs={11}>
                    <Typography variant='h5'> Reservas registradas </Typography>
                    <Divider></Divider>
                </Grid>
                <Grid item xs={1}>
                <IconButton aria-label="delete" color="primary" onClick={props.getAllBookings}>
                    <CachedIcon />
                </IconButton>
                </Grid>
                {props.bookings.map(b => 
                    <Grid item xs={12} key={b.id}>
                        <p>{b.startTime}hs - {b.endTime}hs</p>
                        <Divider></Divider>
                    </Grid>
                )}
            </Grid>
        </CardContent>
    )
}
 
export default BookingList