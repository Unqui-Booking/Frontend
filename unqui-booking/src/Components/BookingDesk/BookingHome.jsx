import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, Grid , Typography, CardContent, Container , Card } from '@material-ui/core'
import BookingList from './BookingList'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(3,'auto'),
    },
    header: {
        textAlign: 'center'
    }
}))

const BookingHome = ({
    deskReducer: {
        desk
    },
    chairReducer: {
        seatId
    },
}) => {

    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Grid container className={classes.root} justify="center">
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} className={classes.header}>
                                <Typography variant='h6'>Reservas registradas para escritorio {desk.nameDesk}, asiento {seatId}</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <BookingList></BookingList>
                </Card>
            </Grid>
        </Grid>
        </Container>
        
    )
}
 
const mapStateToProps = state => ({
    deskReducer: state.deskReducer,
    chairReducer: state.chairReducer,
});
 
export default BookingHome