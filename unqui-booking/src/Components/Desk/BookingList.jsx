import React from 'react';
import { Grid , Typography, Divider, CardContent} from '@material-ui/core'

const bookings = [1,2,3,4,5,6,]

const BookingList = () => {
    return (
        <CardContent>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant='h4'> Reservas registradas </Typography>
                    <Divider></Divider>
                </Grid>
                {bookings.map(b => 
                    <Grid item xs={12}>
                        <p>12-13</p>
                        <Divider></Divider>
                    </Grid>
                )}
            </Grid>
        </CardContent>
    )
}
 
export default BookingList