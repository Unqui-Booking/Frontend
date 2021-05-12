import { Grid } from "@material-ui/core"

const Confirmation = (props) => {

    const {desk, seat} = props

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
            <strong>Fecha de reserva:</strong> 12/05/2021
            </Grid> 
            <Grid item xs={4} sm={4} ></Grid>
            <Grid item xs={8} sm={8}>
            <strong>Horario de reserva:</strong> 10hs -15hs
            </Grid> 
        </Grid>
    )

}

export default Confirmation