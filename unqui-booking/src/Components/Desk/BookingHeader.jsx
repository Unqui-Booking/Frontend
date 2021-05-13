import React from 'react';
import { Grid , Typography, Divider, CardContent, TextField, makeStyles} from '@material-ui/core'
import BookingRegister from './BookingRegister'

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

const BookingHeader = () => {
    const classes = useStyles()

    return (
        <CardContent>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7} className={classes.header}>
                    <Typography variant='h4'> Escritorio 1</Typography>
                    <Divider></Divider>
                    
                    <form noValidate>
                        <TextField
                            id="date"
                            className={classes.textField}
                            label="Fecha de reserva"
                            type="date"
                            defaultValue="2021-04-24"
                            disabled
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </form>
                    
                </Grid>
                <Grid item xs={12} sm={5} className={classes.register}>
                    {/* <BookingRegister></BookingRegister> */}
                </Grid>
            </Grid>
        </CardContent>
    )
}
 
export default BookingHeader