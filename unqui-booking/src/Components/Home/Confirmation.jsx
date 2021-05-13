import { Grid } from "@material-ui/core"
import moment from 'moment';

const Confirmation = (props) => {

    const {desk, seat, date, startHour, endHour} = props

    return (
        
        <Grid container justify="center">
            <Grid item xs={4} sm={4} ></Grid>
            <Grid item xs={8} sm={8} >
             <strong>Escritorio:</strong> {desk.nameDesk}
            </Grid>
            <Grid item xs={4} sm={4} ></Grid>
            <Grid item xs={8} sm={8}>
            <strong>Asiento:</strong> {seat}
            </Grid> 
            <Grid item xs={4} sm={4} ></Grid>
            <Grid item xs={8} sm={8}>
            <strong>Fecha de reserva:</strong> {moment(date).format('DD/MM/YYYY')}
            
            </Grid> 
            <Grid item xs={4} sm={4} ></Grid>
            <Grid item xs={8} sm={8}>
            <strong>Horario de reserva:</strong> {startHour}hs - {endHour}hs
            </Grid> 
        </Grid>
    )

}

export default Confirmation