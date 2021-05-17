import React, { useState } from 'react'
import { Grid, Typography, Divider, Avatar, Chip, CardContent, Card, FormControlLabel, Radio, FormControl, RadioGroup } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Desk from './Desk'
import imgDesk from '../../Img/desk.png'


const useStyles = makeStyles((theme) => ({
      flex: {
          display: "flex",
      },
      title: {
        padding: "2rem",
        textAlign: "center",
      },
      margin: {
        margin: "1rem",
      },
      titleArea: {
        textAlign: "center",
        border: '1px #d5d5d5 solid',
        borderStyle: 'none none solid none',
      },
      border: {
        border: '1px #d5d5d5 solid',
        borderStyle: 'none solid',
    },
}))

const AreaDesk = (props) => {

    const classes = useStyles();

    const {desksSilent, desksGeneral, setSelectedDesk, deskSelected, getChairByDesk, setActiveStep, getMapAvailabilySeats, date, startTime, endTime } = props

    return (
        <Grid container justify="center" className={classes.flex}>  
            
            <Grid item sm={6} xs={12} className={classes.border}>
                <Typography variant='h5' className={classes.titleArea}> Área Silenciosa </Typography> 
                      
                {desksSilent.map((d)=>(
                    <Desk desk={d} desk={d} setSelectedDesk={setSelectedDesk} deskSelected={deskSelected} getChairByDesk={getChairByDesk} setActiveStep={setActiveStep} getMapAvailabilySeats={getMapAvailabilySeats} date={date} startTime={startTime} endTime={endTime} />
                ))} 
            </Grid>
            <Grid item sm={6} xs={12} className={classes.border}>

            <Typography variant='h5' className={classes.titleArea}> Área General </Typography> 
               
               {desksGeneral.map((d)=>(
                   <Desk desk={d} setSelectedDesk={setSelectedDesk} deskSelected={deskSelected} getChairByDesk={getChairByDesk} setActiveStep={setActiveStep} getMapAvailabilySeats={getMapAvailabilySeats} date={date} startTime={startTime} endTime={endTime} />
               ))} 
            </Grid>
        </Grid>
    )
}

export default AreaDesk