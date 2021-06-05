import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { setOpenModalCancel } from '../../Actions/bookingActions';

const ModalCancelBooking = (props) => { 

  const { booking, openModalCancel, setOpenModalCancel } = props;

  const handleClose = () => { 
    setOpenModalCancel(false);
  };

  return (
      <Dialog
        open={openModalCancel}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Cancelar reserva"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Desea cancelar la reserva para el asiento {booking.seat.id} en el escritorio {booking.seat.desk.id} el día {booking.date} en el horario {booking.startTime}hs - {booking.endTime}hs?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Sí
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
  );
}

const mapStateToProps = state => ({
    bookingReducer: state.bookingReducer,
});

export default connect(mapStateToProps, { setOpenModalCancel  })(ModalCancelBooking);