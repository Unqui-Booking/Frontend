import { Avatar, Card, CardContent, Container, Grid, IconButton, Typography, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab'
import React, { useState, useEffect }  from 'react'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { FaUser } from 'react-icons/fa';
import DeleteIcon from '@material-ui/icons/Delete';
import { setCopyHistoricalBookings, getHistoricalBookingsByUser, getCurrentsBookingsByUser, setOpenModalCancel, cancelBooking, setOpenSuccessCancel } from '../../Actions/bookingActions';
import ListBookingStudent from './ListBookingStudent';
import ModalCancelBooking from './ModalCancelBooking';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row',
        marginTop: '16px',
    },
    title: {
        margin: '15px',
    },
    iconUser: {
        width: '5rem',
        height: '5rem',
        color: '#0000005c',
        margin: '18px 18px 0px 18px',
    },
    avatar: {
        width: '6rem',
        height: '6rem',
        color: '#d5d5d5',
    },
    containerBooking: {
        display: 'flex',
        flexFlow: 'row',
        border: '1px solid #0000002b',
        borderRadius: '4px',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '2.5rem',
        padding: '0px 12px',
    },
    containerUser: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerIconUser: {
        margin: '12px 0px',
    },
    cardUser: {
        margin: '16px 12px 12px 0px',
    },
    cardBookings: {
        marginBottom: '16px',
    },
    nameUser: {
        margin: '12px 0px',
    },
  }));

const Student = ({
    userReducer: {
        user,
    },
    bookingReducer: {
        bookingsHistoricalByUser,
        copyHistoricalBookings,
        bookingsCurrentsByUser,
        openModalCancel,
        succesCancel,
    },
    setCopyHistoricalBookings,
    getHistoricalBookingsByUser,
    getCurrentsBookingsByUser,
    setOpenModalCancel,
    cancelBooking,
    setOpenSuccessCancel

}) => {

    const classes = useStyles();
    const [bookingToCancel, setBookingToCancel] = useState(null);

    useEffect( ()  => {
         redirectPage();
    }, [])

    const redirectPage =  ()  => {
        if(user){
             getHistoricalBookingsByUser(user.id);
             getCurrentsBookingsByUser(user.id);
        }
        else{
            window.location.href = 'http://localhost:3001/'
        }
    }

    const handleOpenModal = (booking) => {
        setBookingToCancel(booking);
        setOpenModalCancel(true);
        
    }

    const handleCloseSuccesCancel = () => {
        setOpenSuccessCancel(false);
    }

    const getDisabled = (booking) => {
        return booking.state == "expired";
    }

    return (
        <div>
            { user ? 
                <Container maxWidth="lg"> 
                    <Grid container spacing={3} className={classes.root} justifyContent="center" >
                        <Grid item xs= {12} sm={3} className={classes.cardUser}>

                            <Card>
                                <CardContent>
                                    <Grid container className={classes.containerUser}> 
                                        <Avatar className={classes.avatar}>
                                            <Grid item className={classes.containerIconUser}>
                                                <FaUser className={classes.iconUser}/>
                                            </Grid>
                                        </Avatar>
                                        <Typography variant='h6' className={classes.nameUser} data-testid="user-name"><strong>{user.name}</strong></Typography>
                                        <Typography variant='body2' data-testid="user-email">{user.mail}</Typography>
                                </Grid>
                                </CardContent>
                            </Card>
                            
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Grid item xs={12}>
                                <Typography variant='h5' className={classes.title}> <strong>Reservas registradas</strong></Typography>
                            </Grid>
                            <Card className={classes.cardBookings}>
                                <CardContent>
                                    <Grid container spacing={3} className={classes.containetPicture}>
                                        <Grid item xs={12} sm={12}>
                                            {bookingsCurrentsByUser.length > 0  ? bookingsCurrentsByUser.map(b =>  
                                                <Grid container key={b.id} data-testid={'booking-'+b.id}>
                                                    <Grid item xs={11} sm={11} className={classes.containerBooking}>
                                                        <Typography variant='body2'>{b.seat.desk.nameDesk}</Typography>
                                                        <Typography variant='body2'>Asiento {b.seat.id}</Typography>
                                                        <Typography variant='body2'>{moment(b.date).format('LL')}</Typography>
                                                        <Typography variant='body2'>{b.startTime}hs - {b.endTime}hs</Typography>
                                                    </Grid>
                                                    <Grid item xs={1} sm={1} >
                                                        <IconButton
                                                        aria-label="account of current user"
                                                        aria-controls="menu-appbar"
                                                        aria-haspopup="true"
                                                        onClick={()=>handleOpenModal(b)}
                                                        color="primary"
                                                        disabled ={getDisabled(b)}
                                                        data-testid={'button-cancell-booking-'+b.id}
                                                        >
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Grid>
                                                </Grid> 
                                                )
                                            : 
                                            <Grid container justifyContent='center'>
                                                <Typography variant='body2'>Sin reservas</Typography>
                                            </Grid>
                                            }
                                            <ModalCancelBooking data-testid='modal-details' booking={bookingToCancel} openModalCancel={openModalCancel} setOpenModalCancel={setOpenModalCancel} cancelBooking={cancelBooking} getCurrentsBookingsByUser={getCurrentsBookingsByUser} user={user} setOpenSuccessCancel={setOpenSuccessCancel}/>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                            
                            <ListBookingStudent listBooking={bookingsHistoricalByUser} listCopyBooking={copyHistoricalBookings} setCopy={setCopyHistoricalBookings} admin={false} confirmBooking={null}/>
                            <Snackbar open={succesCancel} autoHideDuration={3000} onClose={handleCloseSuccesCancel} anchorOrigin={ {vertical: 'top', horizontal: 'center'} }>
                                <Alert onClose={handleCloseSuccesCancel} severity="success">
                                    <strong>Reserva cancelada exitosamente.</strong>
                                </Alert>
                            </Snackbar>                   
                        </Grid>
                    </Grid>
                </Container> :
                <Redirect to="/"/>
            }
        </div>
            

    )
}

const mapStateToProps = state => ({
    userReducer: state.userReducer,
    bookingReducer: state.bookingReducer,
});

export default connect(mapStateToProps, { setCopyHistoricalBookings, getHistoricalBookingsByUser, setOpenModalCancel, getCurrentsBookingsByUser, cancelBooking, setOpenSuccessCancel })(Student);