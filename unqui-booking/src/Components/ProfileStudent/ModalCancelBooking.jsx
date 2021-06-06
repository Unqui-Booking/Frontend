import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { setOpenModalCancel } from '../../Actions/bookingActions';

const ModalCancelBooking = ({
    bookingReducer: {
        openModalCancel,
    },
    setOpenModalCancel,

}) => {

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
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
  );
}

const mapStateToProps = state => ({
    bookingReducer: state.bookingReducer,
});

export default connect(mapStateToProps, { setOpenModalCancel  })(ModalCancelBooking);