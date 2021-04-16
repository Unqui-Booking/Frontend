import React from 'react';
import { Grid, Container , Card } from '@material-ui/core'
import BookingList from './BookingList'
import BookingHeader from './BookingHeader'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(3,'auto'),
    }
}))

const BookingHome = () => {

    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Grid container className={classes.root} justify="center">
            <Grid item xs={12}>
                <Card>
                    <BookingHeader></BookingHeader>
                    <BookingList></BookingList>
                </Card>
            </Grid>
        </Grid>
        </Container>
        
    )
}
 
export default BookingHome