
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, styled, TextField, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import { DateRange } from "@mui/icons-material";

const SytledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })

const UserBox = styled(Box)(
    {
        display:"flex",
        alignItems:"center",
        gap:10,
    }
)

const Add = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Tooltip onClick={handleOpen} title="Delete" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25)",md:30}}}>
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
         </Tooltip>
          <SytledModal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box bgcolor={"background.default"} color={"text.primary"} width={400} height={200}  p={3} borderRadius={5}>
            <Typography id="modal-modal-title" variant="h6" component="h2" color={"gray"} textAlign={"center"}>
              Create Post
            </Typography>
            <UserBox>
                <Avatar>
                    
                </Avatar>
                <Typography fontWeight={500} mt={1}>
                    Tobi
                </Typography>
            </UserBox>
            <TextField
            sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />

        <ButtonGroup fullWidth variant="contained" >
            <Button>Post</Button>
            <Button sx={{width:"100%"}}>
                
                <DateRange/>
                </Button>
        </ButtonGroup>
          </Box>
        </SytledModal>
        </>

    );
  };
  export default Add;

