import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import AreaDesk from "./AreaDesk";
import { getAllDesks, setSelectedDesk, getDeskByArea } from '../../Actions/deskActions' 
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
    getAllDesks,
    setSelectedDesk,
    getDeskByArea }) => {
        
        useEffect(() => {
            getAllDesks();
            getDeskByArea("silent");
            getDeskByArea("general");
            {console.log(deskSelected)}
        }, [])

        const classes = useStyles();

        return (
            <Grid container>
                <AreaDesk desksGeneral={desksGeneral} desksSilent={desksSilent} setSelectedDesk={setSelectedDesk} deskSelected={deskSelected}></AreaDesk>
            </Grid>
            
        )
    }

const mapStateToProps = state => ({
    deskReducer: state.deskReducer,

});
    
export default connect(mapStateToProps, { getAllDesks, setSelectedDesk, getDeskByArea })(SelectDesk)