import { Card, Container, Grid, Typography, Avatar, CardContent, Link, Snackbar } from '@material-ui/core';
import React, { useEffect, useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import ListBookingStudent from '../../Components/ProfileStudent/ListBookingStudent';
import { isFinedUserAtDate } from '../../Actions/userActions';
import { getBookingsToday , setCopyBookingsToday, confirmBooking, cancelBookingByFined, setSuccessConfirmBooking, fineBooking, setSuccessFineBooking, getBookingsTodayByState, setCopyFinedBookings, setCopyBookingsConfirmed, updateStateBooking, getBookingsToCancel} from '../../Actions/bookingActions';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { Alert } from '@material-ui/lab';
import logo from '../../Img/circle.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row',
        marginTop: '16px',
    },
    title: {
        margin: '15px',
    },
    containerUser: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '24px',
    },
    containerIconUser: {
        margin: '12px 0px', 
    }, 
    iconUser: {   
        width: '5rem',
        height: '5rem',    
        color: '#0000005c',
        margin: '5px 20px',
    },
    avatar: {
        width: '6rem',
        height: '6rem',
        color: '#d5d5d5',
    },
    linksAdmin: {
        display: 'flex',
        width: '13rem',
        margin: '30px 0px -15px 0px',
        padding: '5px',
        borderRadius: '10px',
        background: 'transparent',
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        color: 'black',
    },
    linksAdminSelected: {
        display: 'flex',
        width: '13rem',
        margin: '30px 0px -15px 0px',
        padding: '5px',
        borderRadius: '10px',
        background: '#d5d5d5d5'
    }

}))

const HomeAdmin = ({
    bookingReducer: {
        bookingsToday,
        copyBookingsToday,
        succesConfirmBooking,
        textAlertFineOrConfirmBooking,
        succesFineBooking,
        listFinedBookings,
        listConfirmedBookings,
        copyListFinedBookings,
        copyListConfirmedBookings
    },
    getBookingsToday,
    setCopyBookingsToday, 
    confirmBooking,
    setSuccessConfirmBooking,
    fineBooking,
    setSuccessFineBooking,
    getBookingsTodayByState,
    setCopyFinedBookings,
    setCopyBookingsConfirmed,
    getBookingsToCancel,
    isFinedUserAtDate,
    cancelBookingByFined,
    updateStateBooking

}) => {   

    const classes = useStyles();
    const [selectTypeBooking, setSelectTypeBooking] = useState('todayBookings');
    const [title, setTitle] = useState('Reservas del día');

    useEffect( () => {
        getBookingsToday();
    }, []);

   
   
    const handleClose = () => {
        setSuccessConfirmBooking(false);
        setSuccessFineBooking(false);
    }

    const handleTypeBooking = async (typeBoooking, title) => {
        setSelectTypeBooking(typeBoooking);
        setTitle(title);
        switch(typeBoooking){
            case "todayBookings": 
                await getBookingsToday();
                break;
            case "finedBookings":
                await getBookingsTodayByState('fined')
                break;
            case "confirmedBookings":
                await getBookingsTodayByState('confirmed')
                break;
            default:
                console.log("Error in function handleTypeBooking");
        }
    }

    const cancelBookings = () => {

        // let bookings = await getBookingsToCancel();
        // let infoFined = await isFinedUserAtDate(moment(new Date()).format().split('T')[0], userId);
        // let dateLimit = moment(infoFined.dateLimit).format().split('T')[0];;
        // let startDate = moment(new Date()).format().split('T')[0];

        
        
        // bookings.map((booking)=> cancelBookingsByfine(startDate, dateLimit, user));
    }

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3} className={classes.root} justify="center" >
                <Grid item xs= {12} sm={3} className={classes.cardUser}>

                    <Card>
                        <CardContent>
                            <Grid container className={classes.containerUser}> 
                                <Avatar className={classes.avatar}>
                                    <Grid item className={classes.containerIconUser}>
                                        <Avatar alt="Remy Sharp" src={logo} className={classes.avatar} />
                                    </Grid>
                                </Avatar>
                                <Grid item className={selectTypeBooking == 'todayBookings' ? classes.linksAdminSelected : classes.linksAdmin}>
                                    <LabelImportantIcon color='primary'/>
                                    <Link to={"/"} onClick={() => handleTypeBooking("todayBookings", "Reservas del día")} className={classes.link}>Reservas del día</Link>
                                </Grid>
                                <Grid item className={selectTypeBooking == 'finedBookings' ? classes.linksAdminSelected : classes.linksAdmin}>
                                    <LabelImportantIcon color='primary'/>
                                    <Link to={"/"} onClick={() => handleTypeBooking("finedBookings", "Reservas multadas")} className={classes.link}>Reservas multadas</Link>
                                </Grid>
                                <Grid item className={selectTypeBooking == 'confirmedBookings' ? classes.linksAdminSelected : classes.linksAdmin}>
                                    <LabelImportantIcon color='primary'/>
                                    <Link to={"/"} onClick={() => handleTypeBooking("confirmedBookings", "Reservas confirmadas")} className={classes.link}>Reservas confirmadas</Link>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    
                </Grid>
                <Grid container xs={12} sm={9} spacing={3} justify="center"> 
                    <Grid item xs={12} sm={12}>
                        <Typography variant='h5' className={classes.title}><strong>{title}</strong></Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        {
                            selectTypeBooking == "todayBookings" ?
                            <ListBookingStudent 
                                listBooking={bookingsToday} 
                                listCopyBooking={copyBookingsToday} 
                                setCopy={setCopyBookingsToday} 
                                admin={true} 
                                confirm={confirmBooking}
                                getBookings={getBookingsToday}
                                fine={fineBooking}
                                typeBoooking={selectTypeBooking}
                                cancelBooking={{
                                    "getBookingsToCancel": getBookingsToCancel,
                                    "isFinedUserAtDate": isFinedUserAtDate,
                                    "updateState": cancelBookingByFined
                                    }}
                            /> : null
                        }
                        {
                            selectTypeBooking == "finedBookings" ?
                            <ListBookingStudent 
                                listBooking={listFinedBookings} 
                                listCopyBooking={copyListFinedBookings} 
                                setCopy={setCopyFinedBookings} 
                                admin={true} 
                                confirm={confirmBooking}
                                getBookings={() => getBookingsTodayByState('fined')}
                                fine={fineBooking}
                                typeBoooking={selectTypeBooking}
                            /> : null
                        }
                        {
                             selectTypeBooking == "confirmedBookings" ?
                             <ListBookingStudent 
                                listBooking={listConfirmedBookings} 
                                listCopyBooking={copyListConfirmedBookings} 
                                setCopy={setCopyBookingsConfirmed} 
                                admin={true} 
                                confirm={confirmBooking}
                                getBookings={() => getBookingsTodayByState('confirmed')}
                                fine={fineBooking}
                                typeBoooking={selectTypeBooking}
                            /> : null
                        }
                        
                    </Grid>
                </Grid>
            </Grid>
            <Snackbar open={succesConfirmBooking||succesFineBooking} autoHideDuration={6000} onClose={handleClose} anchorOrigin={ {vertical: 'top', horizontal: 'center'} }>
                <Alert onClose={handleClose} severity="success">
                    <strong>{textAlertFineOrConfirmBooking}</strong>
                </Alert>
            </Snackbar> 
        </Container>
        
    )
}

const mapStateToProps = state => ({
    bookingReducer: state.bookingReducer,
});

export default connect( mapStateToProps, { getBookingsToday, 
                                           setCopyBookingsToday, 
                                           confirmBooking, 
                                           setSuccessConfirmBooking, 
                                           fineBooking, 
                                           setSuccessFineBooking, 
                                           getBookingsTodayByState, 
                                           setCopyFinedBookings,
                                           setCopyBookingsConfirmed,
                                           updateStateBooking,
                                           isFinedUserAtDate,
                                           getBookingsToCancel,
                                           cancelBookingByFined})(HomeAdmin);