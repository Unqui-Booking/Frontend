import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import AreaDesk from "./AreaDesk";
import { getAllDesks, setSelectedDesk, getDeskByArea } from '../../Actions/deskActions' 
import { getMapAvailabilySeats } from '../../Actions/bookingActions'
import { getChairByDesk } from '../../Actions/chairActions'
import { setActiveStep } from '../../Actions/alertMessageActions'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    border: {
        border: '1px #d5d5d5 solid',
        borderStyle: 'none solid',
    },
}))

const SelectDesk = ( {
    deskReducer: {
        deskSelected,
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
            <Grid container>
                <AreaDesk desksGeneral={desksGeneral} desksSilent={desksSilent} setSelectedDesk={setSelectedDesk} deskSelected={deskSelected} getChairByDesk={getChairByDesk} setActiveStep={setActiveStep} getMapAvailabilySeats={getMapAvailabilySeats} date={date} startTime={startTime} endTime={endTime}></AreaDesk>
            </Grid>
            
        )
    }

const mapStateToProps = state => ({
    deskReducer: state.deskReducer,
    dateHoursReducer: state.dateHoursReducer,
});
    
export default connect(mapStateToProps, { getAllDesks, setSelectedDesk, getDeskByArea, getChairByDesk, setActiveStep, getMapAvailabilySeats })(SelectDesk)