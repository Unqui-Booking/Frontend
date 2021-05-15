import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Grid , Typography, Divider, CardContent, TextField, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    textField: {
      margin: theme.spacing(3),
    },
    register: {
        margin: 'auto'
    },
    header: {
        textAlign: 'center'
    }
    
  }));

const BookingHeader = ({
    deskReducer: {
        desk
    },
    chairReducer: {
        seatId
    },

    }) => {
    const classes = useStyles()

    return (
        <CardContent>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} className={classes.header}>
                    <Typography variant='h6'>Reservas registradas para escritorio {desk.nameDesk}, asiento {seatId}</Typography>
                </Grid>
                <Grid item xs={12} sm={5} className={classes.register}>
                </Grid>
            </Grid>
        </CardContent>
    )
}

const mapStateToProps = state => ({
    deskReducer: state.deskReducer,
    chairReducer: state.chairReducer,
});
 
export default connect(mapStateToProps, { })(BookingHeader)