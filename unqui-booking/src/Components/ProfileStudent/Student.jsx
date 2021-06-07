import { Accordion, AccordionDetails, AccordionSummary, Avatar, Card, CardContent, Container, Grid, IconButton, Paper, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState }  from 'react'
import { connect } from 'react-redux';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { FaUser } from 'react-icons/fa';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import Pagination from '@material-ui/lab/Pagination';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row',
        marginTop: '16px',
    },
    title: {
        margin: '15px',
    },
    iconUser: {
        width: '5rem',
        height: '5rem',
        color: '#0000005c',
        margin: '18px 18px 0px 18px',
    },
    avatar: {
        width: '6rem',
        height: '6rem',
        color: '#d5d5d5',
    },
    containerBooking: {
        display: 'flex',
        flexFlow: 'row',
        border: '1px solid #0000002b',
        borderRadius: '4px',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '2.5rem',
        padding: '0px 12px',
    },
    containerHistorical:{ 
        border: '1px solid #0000002b',
        borderRadius: '4px',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '2.5rem',
        padding: '9px 12px',
        margin: '4px 0px',
    },
    accordion: {
        marginTop: '12px',
    },
    accordionDetails: {
        display: 'flex',
        flexFlow: 'column',
    },
    containerUser: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerIconUser: {
        margin: '12px 0px',
    },
    cardUser: {
        margin: '16px 12px 12px 0px',
    },
    marginTop: {
        marginTop: '16px',
    },
    width: {
        width: '90%',
    },
    cardBookings: {
        marginBottom: '16px',
    },
    nameUser: {
        margin: '12px 0px',
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '12px',
    }
  }));

const Student = ({
    userReducer: {
        user,
    },
    bookingReducer: {
        bookingsHistoricalByUser,
        bookingsCurrentsByUser
    },

}) => {

    const classes = useStyles();
    const [dateFilter, setDateFilter] = useState(new Date());
    const countPages = Math.ceil(bookingsHistoricalByUser.length / 6);
    const bookingsPerPage = 6;  
    const [page, setPage] = useState(1);
    const [copyHistoricalBookings, setCopyHistoricalBookings] = useState([]);

    console.log("cantidad de historical: "+ bookingsHistoricalByUser.length)

    useEffect(() => {
        setCopyHistoricalBookings(bookingsHistoricalByUser);
    })

    const handleFilterDate = (date) => {
        setDateFilter(date);              
    }

    const handleChangePagination = (event, newPage) => {
        setPage(newPage);
    }; 
    const handleFilterDesk = (event) => {
        let filtrados = bookingsHistoricalByUser.filter(b => b.seat.desk.id == parseInt(event.target.value));
        setCopyHistoricalBookings(filtrados);
        console.log(filtrados);
    }

    return (

        <Container maxWidth="lg"> 
            <Grid container spacing={3} className={classes.root} justify="center" >
                <Grid item xs= {12} sm={3} className={classes.cardUser}>

                    <Card>
                        <CardContent>
                            <Grid container className={classes.containerUser}> 
                                <Avatar className={classes.avatar}>
                                <Grid item className={classes.containerIconUser}>
                                    
                                        <FaUser className={classes.iconUser}/>
                                    
                                </Grid></Avatar>
                                <Typography variant='h9' className={classes.nameUser}><strong>{user.name}</strong></Typography>
                                <Typography variant='body2'>{user.mail}</Typography>
                        </Grid>
                        </CardContent>
                    </Card>
                    
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Grid item xs={12}>
                        <Typography variant='h5' className={classes.title}> <strong>Reservas registradas</strong></Typography>
                    </Grid>
                    <Card className={classes.cardBookings}>
                        <CardContent>
                            <Grid container spacing={3} xs={12} sm={12} className={classes.containetPicture}>
                                <Grid item xs={12} sm={12}>
                                    {bookingsCurrentsByUser.length > 0  ? bookingsCurrentsByUser.map(b =>  
                                        <Grid container row nowrap>
                                            <Grid item xs={11} sm={11} className={classes.containerBooking}>
                                                <Typography variant='body2'>{b.seat.desk.nameDesk}</Typography>
                                                <Typography variant='body2'>Asiento {b.seat.id}</Typography>
                                                <Typography variant='body2'>{moment(b.date).format('LL')}</Typography>
                                                <Typography variant='body2'>{b.startTime}hs - {b.endTime}hs</Typography>
                                            </Grid>
                                            <Grid item xs={1} sm={1} >
                                                <IconButton
                                                aria-label="account of current user"
                                                aria-controls="menu-appbar"
                                                aria-haspopup="true"
                                                //onClick={console.log("cancel")}
                                                color="primary"
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Grid>
                                        </Grid> 
                                        )
                                    : 
                                    <Grid container xs={12} sm={12} justify='center'>
                                        <Typography variant='body2' color='#00000082'>Sin reservas</Typography>
                                    </Grid>
                                    }
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    
                    {/* Filtros de historicos */}
                    <Grid container xs={12} sm={12} row justify='center'>
                        <Grid item xs={12} sm={4} >
                            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                <KeyboardDatePicker
                                    className={classes.dateSelect}
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    value={dateFilter}
                                    label="Filtrar historicos por fecha"
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    onChange={handleFilterDate}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>

                        <Grid item xs={12} sm={4} className={classes.marginTop}>
                            <TextField
                                id="standard-number"
                                label="Filtrar historicos por escritorio"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                className={classes.width}
                                onChange={handleFilterDesk}
                            />
                        </Grid>
                        
                        <Grid item xs={12} sm={4} className={classes.marginTop}>
                            <TextField
                                id="standard-number"
                                label="Filtrar historicos por asiento"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                className={classes.width}
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12} className={classes.accordion}>
                        <Accordion expanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><strong>Históricos</strong></Typography>
                            </AccordionSummary>
                            <AccordionDetails className={classes.accordionDetails}>
                                    {copyHistoricalBookings.length > 0 ? copyHistoricalBookings.slice((page - 1) * bookingsPerPage, page * bookingsPerPage).map(b => 
                                            
                                            <Grid container column xs={12} sm={12} className={classes.containerHistorical}>
                                                
                                                    <Typography variant='body2'>{b.seat.desk.nameDesk}</Typography>
                                                    <Typography variant='body2'>Asiento {b.seat.id}</Typography>
                                                    <Typography variant='body2'>{moment(b.date).format('LL')}</Typography>
                                                    <Typography variant='body2'>{b.startTime}hs - {b.endTime}hs</Typography>
                                            </Grid>
                                        ) : 
                                        <Grid container xs={12} sm={12} justify='center'>
                                            <Typography variant='body2' color='#00000082'>Sin reservas</Typography>
                                        </Grid>
                                    }
                                    {copyHistoricalBookings.length > 6 ?
                                        <Pagination 
                                            count={countPages}
                                            color="primary"
                                            page={page}
                                            onChange={handleChangePagination}
                                            defaultPage={1}
                                            size="small"
                                            showFirstButton
                                            showLastButton
                                            className={classes.pagination}
                                        />
                                        : null
                                    }
                                    
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Grid>
        </Container>

    )
}

const mapStateToProps = state => ({
    userReducer: state.userReducer,
    bookingReducer: state.bookingReducer,
});

export default connect(mapStateToProps, {  })(Student);