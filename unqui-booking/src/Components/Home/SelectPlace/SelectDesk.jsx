import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles'
import { getAllDesks, setSelectedDesk, getDeskByArea } from '../../../Actions/deskActions';
import { getMapAvailabilySeats } from '../../../Actions/bookingActions';
import { setActiveStep } from '../../../Actions/alertMessageActions';
import { getChairByDesk } from '../../../Actions/chairActions';
import { Grid, Typography } from '@material-ui/core';
import Desk from "./Desk";

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

const SelectDesk = ( {
    deskReducer: {
        desksSilent,
        desksGeneral,
    },
    dateHoursReducer: {
        date,
        startTime,
        endTime,
    },
    getAllDesks,
    setSelectedDesk,
    getDeskByArea,
    getChairByDesk,
    setActiveStep,
    getMapAvailabilySeats }) => {
        
        useEffect(() => {
            getAllDesks();
            getDeskByArea("silent");
            getDeskByArea("general");
        }, [])

        const classes = useStyles();

        return (    
            <Grid container justify="center" className={classes.flex}>  
            
            <Grid item sm={6} xs={12} className={classes.border}>
                <Typography variant='h5' className={classes.titleArea}> Área Silenciosa </Typography> 
                      
                {desksSilent.map((d)=>(
                    <Desk desk={d} setSelectedDesk={setSelectedDesk} getChairByDesk={getChairByDesk} setActiveStep={setActiveStep} getMapAvailabilySeats={getMapAvailabilySeats} date={date} startTime={startTime} endTime={endTime} />
                ))} 
            </Grid>
            <Grid item sm={6} xs={12} className={classes.border}>

                <Typography variant='h5' className={classes.titleArea}> Área General </Typography> 
                
                {desksGeneral.map((d)=>(
                    <Desk desk={d} setSelectedDesk={setSelectedDesk} getChairByDesk={getChairByDesk} setActiveStep={setActiveStep} getMapAvailabilySeats={getMapAvailabilySeats} date={date} startTime={startTime} endTime={endTime} />
                ))} 
                </Grid>
            </Grid>
        )
    }

const mapStateToProps = state => ({
    deskReducer: state.deskReducer,
    dateHoursReducer: state.dateHoursReducer,
});
    
export default connect(mapStateToProps, { getAllDesks, setSelectedDesk, getDeskByArea, getChairByDesk, setActiveStep, getMapAvailabilySeats })(SelectDesk);