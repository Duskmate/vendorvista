import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios';
import { config } from "../App";
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

export default function AlertDialog({vendor, setDeleted, setVendorData, setApiError}) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async() => {
    try {
      setLoading(true)
      let res = await axios.delete(`${config.endpoint}/vendors`, {data: {id: vendor._id}});
      setLoading(false)
      setVendorData(res.data);
      setDeleted(true);
      setOpen(false);
    } catch(e) {
      setLoading(false)
      // console.log(e);
      setOpen(false);
      setApiError(true)
    }
  }

  return (
    <React.Fragment>
        <IconButton aria-label="delete" color="error" onClick={handleClickOpen}><DeleteIcon /></IconButton>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" sx={{textAlign: 'center', paddingTop: '25px'}}>
                {`Are you sure you want to delete vendor (${vendor.name})?`}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" sx={{textAlign: 'center'}}>
                    This means that the vendor will be permanently deleted.
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{paddingBottom: '15px', paddingRight: '20px'}}>
                <Button variant='contained' onClick={handleClose}>close</Button>
                {loading?
                  <LoadingButton
                    loading
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="outlined"
                    >
                    Delete
                  </LoadingButton>:
                  <Button variant='outlined' color='error' onClick={handleDelete} autoFocus> Delete </Button>
                }
            </DialogActions>
        </Dialog>
    </React.Fragment>
  );
}