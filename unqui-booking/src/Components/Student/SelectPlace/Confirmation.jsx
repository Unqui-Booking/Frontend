import { Grid } from "@material-ui/core"
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    center:{
        display: 'flex',
        flexFlow: 'row',
    }
  }));

const Confirmation = (props) => {

    const classes = useStyles();
    const {desk, seat, date, startTime, endTime } = props
    
    return (
        <Grid container justify="center" className={classes.center}>
            <Grid xs={3} sm={4}></Grid>
            <Grid xs={9} sm={8}>
                <Grid item xs={12} sm={12}>
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
            </Grid>
            
        </Grid>
    )
}

export default Confirmation