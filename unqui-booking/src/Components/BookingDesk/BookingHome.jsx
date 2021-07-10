import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles, Grid , Typography, CardContent, Container , Card } from '@material-ui/core';
import { Redirect } from "react-router-dom";
import BookingList from './BookingList';


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
        desk,
    },
    chairReducer: {
        seatId
    },
}) => {

    useEffect( ()  => {
        redirectPage();
   }, [])

   const redirectPage = ()  => {
       if(!desk || !seatId){  window.location.href = 'http://localhost:3001/' }
   }

    const classes = useStyles();

    return (
        <div>
            {desk || seatId ? 
                <Container maxWidth="md">
                    <Grid container className={classes.root} justifyContent="center">
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
                </Container> :
                <Redirect to="/"/>
            }
        </div>
        
        
    )
}
 
const mapStateToProps = state => ({
    deskReducer: state.deskReducer,
    chairReducer: state.chairReducer,
});
 
export default connect(mapStateToProps, { })(BookingHome)