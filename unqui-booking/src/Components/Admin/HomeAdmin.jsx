import { Card, Container, Grid, Typography, Avatar, CardContent, Link } from '@material-ui/core';
import React, { useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import ListBookingStudent from '../../Components/ProfileStudent/ListBookingStudent';
import { getBookingsToday , setCopyBookingsToday, confirmBooking } from '../../Actions/bookingActions';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MenuBookIcon from '@material-ui/icons/MenuBook';
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
        width: '12rem',
        margin: '30px 0px -15px 0px',
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        color: 'black',
        
    }
}))

const HomeAdmin = ({
    bookingReducer: {
        bookingsToday,
        copyBookingsToday
    },
    getBookingsToday,
    setCopyBookingsToday, 
    confirmBooking

}) => {   

    const classes = useStyles();

    useEffect(() => {
        getBookingsToday(); 
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
            <Grid container spacing={3} className={classes.root} justify="center" >
                <Grid item xs= {12} sm={3} className={classes.cardUser}>

                    <Card>
                        <CardContent>
                            <Grid container className={classes.containerUser}> 
                                <Avatar className={classes.avatar}>
                                    <Grid item className={classes.containerIconUser}>
                                        {/* <MenuBookIcon className={classes.iconUser}/> */}
                                        <Avatar alt="Remy Sharp" src={logo} className={classes.avatar} />
                                    </Grid>
                                </Avatar>
                                <Grid item className={classes.linksAdmin}>
                                    <LabelImportantIcon color='primary'/>
                                    <Link href="#" to={"/"} className={classes.link}>Reservas confirmadas</Link>
                                </Grid>
                                <Grid item className={classes.linksAdmin}>
                                    <LabelImportantIcon color='primary'/>
                                    <Link href="#" to={"/"} className={classes.link}>Reservas multadas</Link>
                                </Grid>
                                
                            </Grid>
                        </CardContent>
                    </Card>
                    
                </Grid>
                <Grid container xs={12} sm={9} spacing={3} justify="center"> 
                    <Grid item xs={12} sm={12}>
                        <Typography variant='h5' className={classes.title}> <strong>Reservas del día</strong></Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <ListBookingStudent listBooking={bookingsToday} listCopyBooking={copyBookingsToday} setCopy={setCopyBookingsToday} admin={true} confirmBooking={confirmBooking} getBookings={getBookingsToday}/>
                    </Grid>

                </Grid>
            </Grid>
                
        </Container>
        
    )
}

const mapStateToProps = state => ({
    bookingReducer: state.bookingReducer,
});

export default connect(mapStateToProps, { getBookingsToday, setCopyBookingsToday, confirmBooking })(HomeAdmin);