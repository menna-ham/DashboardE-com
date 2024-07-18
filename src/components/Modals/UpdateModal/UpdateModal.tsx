import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react'

const customStyle= {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const UpdateModal = ({isOpen, setIsOpen, subtitle}) => {
    // const [open, setOpen] = React.useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);


    function afterOpenModal() {
        subtitle.style.color = '#f00';
      }
    
  return (
    <div>
    <Button onClick={handleOpen}>Open modal</Button>
    <Modal
      open={isOpen}
      onClose={handleClose}
      onAfterOpen={afterOpenModal}
      onRequestClose={handleClose}
      style={customStyle}
      contentLabel={`Update `}
      ariaHideApp={false}
       aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
      <Box sx={customStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  </div>

  )
}

export default UpdateModal