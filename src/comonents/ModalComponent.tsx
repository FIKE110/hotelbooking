import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};



export default function ModalComponent({open,setOpen,sender,message}:
  {open:boolean,setOpen:Function,sender:string,message:string}) {
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <div style={{display:'flex'}}>
            <h2 id="parent-modal-title" style={{whiteSpace:'nowrap'}}>Notification Message</h2>
            <Button style={{color:'red',
            }} onClick={()=>handleClose()}>X</Button>
          </div>
          
          <p>by : {sender}</p>
          <p id="parent-modal-description">
            <b>{message}</b>
          </p>
        </Box>
      </Modal>
  );
}