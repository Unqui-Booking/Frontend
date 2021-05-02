import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import AreaDesk from "./AreaDesk";
import { getAllDesks } from '../../Actions/deskActions' 
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
    },
    getAllDesks}) => {
        
        useEffect(() => {
            getAllDesks()
        }, [])

        const classes = useStyles();

        return (
            <Grid container>
                
                    <Grid item xs={12} sm={6}>
                        <AreaDesk listsDesk={desks} title={"Area silenciosa"} ></AreaDesk>
                    </Grid>
                <Grid item xs={12} sm={6}>
                    <AreaDesk listsDesk={desks} title={"Area general"}></AreaDesk>
                </Grid>
            </Grid>
            
        )
    }

const mapStateToProps = state => ({
    deskReducer: state.deskReducer,

});
    
export default connect(mapStateToProps, { getAllDesks, })(SelectDesk)