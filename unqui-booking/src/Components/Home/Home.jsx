import React from 'react'
import { Grid, Container,  Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Desk from './Desk'


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      flex: {
          display: "flex",
      },
      title: {
        padding: "2rem",
        textAlign: "center",
      },
      a: {
          display: "flex",
          flexFlow: "row-wrap",
          backgroundColor: "red"
      },
      b: {
        backgroundColor: "pink"
        },
        c: {
            backgroundColor: "green"
        }

}))

const computerArea = [1,2,3,4,5,6]
const silentArea = [1,2,3,4,5,6,7,8,9,10]
const generalArea = [1,2,3,4,5,6,7,8,9,10]

const Home = () => {

    const classes = useStyles();
    var date = new Date();
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    return (
        <Container maxWidth="md">
            <Grid container className={classes.root} justify="center" > 
                <Grid item xs={12}>
                    <Typography variant='h4' className={classes.title}> Sistema de gestión de reservas de escritorios</Typography>
                </Grid>
                <Grid item xs={12} justify="center" className={classes.flex}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Seleccionar fecha de reserva"
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            onChange={console.log("fecha seleccionada")}
                            disablePast={true}
                            maxDate={lastDay}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>

                {/*** Desk from computer area ***/}

                <Grid item xs={12} justify="center" className={classes.a}>           
                    {computerArea.map((d)=>(
                        <Desk></Desk>   
                    ) )}        
                </Grid>

                {/*** Desk from silent area ***/}    

                <Grid item xs={6} justify="center" className={classes.b}>           
                    {silentArea.map((d)=>(
                        <Desk></Desk>   
                    ) )}        
                </Grid>   

                {/** Desk from general area **/} 

                <Grid item xs={6} justify="center" className={classes.c}>           
                    {generalArea.map((d)=>(
                        <Desk></Desk>
                    ) )}        
                </Grid>   
            
        </Grid>
        </Container>
        
    )
}
 
export default Home