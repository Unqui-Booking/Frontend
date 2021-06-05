import { Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import ListBookingStudent from '../../Components/ProfileStudent/ListBookingStudent';
import { getBookingsToday , setCopyBookingsToday } from '../../Actions/bookingActions';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row',
        marginTop: '16px',
    },
    title: {
        margin: '15px',
    },
}))

const HomeAdmin = ({
    bookingReducer: {
        bookingsToday,
        copyBookingsToday
    },
    getBookingsToday,
    setCopyBookingsToday, 

}) => {

    const classes = useStyles();

    useEffect(() => {
        getBookingsToday(getToday());
    }, []);

    const getToday = () => {
        let today = new Date();
        let month = today.getMonth()+1 < 10 ? "0"+ (today.getMonth()+1).toString() : (today.getMonth()+1).toString();
        let day = today.getDate() < 10 ? "0"+ today.getDate().toString() : today.getDate();
        today = today.getFullYear().toString() + "-" + month + "-" + day;
        return today;
    }

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3} justify="center"> 
                <Grid item xs={12} sm={12}>
                    <Typography variant='h5' className={classes.title}> <strong>Reservas del día</strong></Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <ListBookingStudent listBooking={bookingsToday} listCopyBooking={copyBookingsToday} setCopy={setCopyBookingsToday} admin={true} />
                </Grid>

            </Grid>
        </Container>
        
    )
}

const mapStateToProps = state => ({
    bookingReducer: state.bookingReducer,
});

export default connect(mapStateToProps, { getBookingsToday, setCopyBookingsToday })(HomeAdmin);