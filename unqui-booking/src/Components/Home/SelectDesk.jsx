import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import AreaDesk from "./AreaDesk";
import { getAllDesks, setSelectedDesk, getDeskByArea } from '../../Actions/deskActions' 
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    border: {
        border: '1px',
        borderStyle: 'none groove none none',
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
        }, [])

        const classes = useStyles();

        return (
            <Grid container>
                {/** ToDo >>> filtrar por tipo de area **/}
                    <Grid item xs={12} sm={6}>
                        <AreaDesk listsDesk={desksSilent} title={"Area silenciosa"} setSelectedDesk={setSelectedDesk} deskSelected={deskSelected}></AreaDesk>
                    </Grid>
                <Grid item xs={12} sm={6}>
                    <AreaDesk listsDesk={desksGeneral} title={"Area general"} setSelectedDesk={setSelectedDesk} deskSelected={deskSelected}></AreaDesk>
                </Grid>
            </Grid>
            
        )
    }

const mapStateToProps = state => ({
    deskReducer: state.deskReducer,

});
    
export default connect(mapStateToProps, { getAllDesks, setSelectedDesk, getDeskByArea })(SelectDesk)