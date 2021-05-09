import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core'
import { GiOfficeChair, GiTable } from 'react-icons/gi';

const useStyles = makeStyles((theme) => ({

    flex: {
        display: "flex",
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
    }
  }));

const SelectChair = () => {

    const classes = useStyles();
    const chairsTop = [1,2,3,4,5,6]
    const chairBottom = [1,2,3,4,5,6]

    const handleClick = (e) => {
        console.log(e);
    }

    return (
        <Grid container justify="center" className={classes.flex}>
            
            <Grid item xs={12} sm={12} justify="center" className={classes.flex}>
                {chairsTop.map((cl) => (
                    <Grid xs={2} className={classes.chairTop}>
                        <Button variant="contained"  color="default"  onClick={(e) => handleClick(e)} className={classes.box}>
                            <GiOfficeChair className={classes.sizeChair} key={cl}/>
                        </Button>
                    </Grid>
                ))}
            </Grid>
            <Grid item xs={12} sm={12} className={classes.desk}>
                <p className={classes.text}>[ Escritorio seleccionado ]</p>
            </Grid>
            <Grid item xs={12} sm={12} justify="center" className={classes.flex}> 
                {chairBottom.map((cr) => (
                    <Grid xs={2} justify="center" className={classes.chairBottom}>
                        <Button variant="contained"  color="default"  onClick={(e) => handleClick(e)} className={classes.box}>
                            <GiOfficeChair className={classes.sizeChair} key={cr}/>
                        </Button>
                        
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default SelectChair