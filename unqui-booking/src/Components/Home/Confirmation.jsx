import { Grid, Typography } from "@material-ui/core"
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    text: {
      textAlign: 'center',
    },
    containerText: {
        padding: theme.spacing(2),
        //border: '1px #d5d5d5 solid',
    }
  }));

const Confirmation = (props) => {

    const classes = useStyles();
    const {desk, seat, date, startTime, endTime, bookingsFiltered} = props
    
    return (
        
            <Grid container justify="center">
                {bookingsFiltered.length == 0 ?

                    <div>
                    <Grid item xs={12} sm={12} >
                    <strong>Escritorio:</strong> {desk.nameDesk}
                    </Grid>
                    <Grid item xs={12} sm={12}>
                    <strong>Asiento:</strong> {seat}
                    </Grid> 
                    <Grid item xs={12} sm={12}>
                    <strong>Fecha de reserva:</strong> {moment(date).format('DD/MM/YYYY')}
                    </Grid> 
                    <Grid item xs={12} sm={12}>
                    <strong>Horario de reserva:</strong> {startTime}hs - {endTime}hs
                    </Grid> 
                    </div> : 
                    <Grid item xs={12} sm={12} className={classes.containerText}>
                        <Alert severity="error" className={classes.text}>No hay disponibilidad para reservar <strong>{desk.nameDesk}</strong> y <strong>asiento {seat} </strong>  
                            en el rango horario de <strong>{startTime}hs - {endTime}hs</strong></Alert>
                    </Grid>
                }
            
        </Grid>
        
        
    )

}

export default Confirmation