import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import AreaDesk from "./AreaDesk";
import { getAllDesks, setSelectedDesk } from '../../Actions/deskActions' 
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
        desks,
        deskSelected,
    },
    getAllDesks,
    setSelectedDesk, }) => {
        
        useEffect(() => {
            getAllDesks()
        }, [])

        const classes = useStyles();

        return (
            <Grid container>
                {/** ToDo >>> filtrar desde la api por tipo de area **/}
                    <Grid item xs={12} sm={6}>
                        <AreaDesk listsDesk={desks} title={"Area silenciosa"} setSelectedDesk={setSelectedDesk} deskSelected={deskSelected}></AreaDesk>
                    </Grid>
                <Grid item xs={12} sm={6}>
                    <AreaDesk listsDesk={desks} title={"Area general"} setSelectedDesk={setSelectedDesk} deskSelected={deskSelected}></AreaDesk>
                </Grid>
            </Grid>
            
        )
    }

const mapStateToProps = state => ({
    deskReducer: state.deskReducer,

});
    
export default connect(mapStateToProps, { getAllDesks, setSelectedDesk, })(SelectDesk)