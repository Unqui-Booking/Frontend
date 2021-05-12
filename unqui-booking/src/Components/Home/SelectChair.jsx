import React from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Chip } from '@material-ui/core'
import { GiOfficeChair } from 'react-icons/gi';
import { setSelectedSeat } from '../../Actions/chairActions';
import { setActiveStep } from '../../Actions/alertMessageActions'

const useStyles = makeStyles((theme) => ({

    flex: {
        display: "flex",
    },
    column: {
        display: "flex",
        flexFlow: 'column',
        alignItems: 'center',
    },
    sizeChair: {
        height: '4rem',
        width: '4rem',
    },
    sizeTable: {
        height: '4rem',
        width: '4rem',
    },
    desk: {
        border: '3px #967a44 outset',
        height: '60px',
        backgroundColor: '#f5ce85',
        margin: '1rem 0'
    },
    text:{
        textAlign: 'center',
        color: '#6b6b6b',
    },
    chairTop: {
        display: "flex",
    },
    chairBottom: {
        display: "flex",
        justifyContent: "flex-end",
    },
    box: {
        boxShadow: 'none',
        backgroundColor: 'transparent',
    },
    chip: {
        border: '1px solid #d5d5d5',
        textTransform: 'capitalize',
        color: '#000000ad',
        fontSize: '0.8rem',
    }
  }));

const SelectChair = ({
    chairReducer: {
        chairs,
        seatId,
    },
    setSelectedSeat,
    setActiveStep }) => {

    const classes = useStyles();

    const handleClick = (seatId) => {
        setSelectedSeat(seatId);
        setActiveStep(1);
        console.log(seatId);
    }

    return (
        <Grid container justify="center" className={classes.flex}>
            
            <Grid item xs={12} sm={12} justify="center" className={classes.flex}>
                {chairs.map((cl) => (
                    <Grid xs={2} className={classes.chairTop}>
                        <Button variant="contained"  color="default"  onClick={() => handleClick(cl.id)} className={classes.box}>
                        <Grid className={classes.column}>
                            <Chip size="small" label={cl.id} color="default" variant="outline" className={classes.chip} />
                            <GiOfficeChair className={classes.sizeChair} key={cl}/>
                        </Grid>
                        </Button>
                    </Grid>
                ))}
            </Grid>
            <Grid item xs={12} sm={12} className={classes.desk}>
                <p className={classes.text}>[ Escritorio seleccionado ]</p>
            </Grid>
            <Grid item xs={12} sm={12} justify="center" className={classes.flex}> 
                {chairs.map((cr) => (
                    <Grid xs={2} justify="center" className={classes.chairBottom}>
                        <Button variant="contained"  color="default"  onClick={() => handleClick(cr.id)} className={classes.box}>
                            <Grid className={classes.column}>
                                <GiOfficeChair className={classes.sizeChair} key={cr}/>
                                <Chip size="small" label={cr.id} color="default" variant="outline" className={classes.chip} />
                            </Grid>    
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => ({
    chairReducer: state.chairReducer,
    
});

export default connect(mapStateToProps, { setSelectedSeat, setActiveStep })(SelectChair)