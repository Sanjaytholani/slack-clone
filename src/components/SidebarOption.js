import {
  Button,
  createMuiTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MuiThemeProvider,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { enterRoom } from "../features/userSlice";
import { db } from "../firebase";

const SidebarOption = ({ Icon, title, addChannel, selectChannelId, id }) => {
  const [open, setOpen] = useState(false);
  const [channelInput, setChannelInput] = useState("");
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#fff",
      },
    },
  });
  const handelSubmit = () => {
    db.collection("rooms").add({
      name: channelInput,
    });
  };
  const selectChannel = () => {
    dispatch(
      enterRoom({
        roomId: id,
      })
    );
  };
  const submit = (e) => {
    e.preventDefault();
    if (addChannel) {
      handleClickOpen();
    } else if (selectChannelId) {
      selectChannel();
    }
  };
  return (
    <MuiThemeProvider theme={theme}>
      <SidebarOptionContainer
        onClick={(e) => {
          submit(e);
        }}
      >
        {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
        {Icon ? (
          <h3>{title}</h3>
        ) : (
          <SidebarOptionChannel>
            <span>#</span> <h3>{title}</h3>
          </SidebarOptionChannel>
        )}
      </SidebarOptionContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContainer>
          <DialogTitle id="form-dialog-title">Channel Name</DialogTitle>
          <DialogContent>
            <DialogContentText style={{ color: "white" }}>
              Enter the channel Name
            </DialogContentText>
            <TextFieldStyled
              autoFocus
              margin="dense"
              error={channelInput.length < 4}
              id="name"
              label="Channel Name"
              type="text"
              fullWidth
              onChange={(e) => setChannelInput(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                if (channelInput.length >= 4) {
                  handleClose();
                  handelSubmit();
                }
              }}
              color="primary"
            >
              Add
            </Button>
          </DialogActions>
        </DialogContainer>
      </Dialog>
    </MuiThemeProvider>
  );
};

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 500;
  }
`;
const SidebarOptionChannel = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 500;
  }
  > span {
    padding: 10px;
    font-size: 20px;
  }
`;
const DialogContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
`;
const TextFieldStyled = styled(TextField)`
  background-color: var(--slack-color);
  > .MuiInputBase-root {
    color: white;
  }
  .MuiInput-underline:before {
    border-bottom-color: white;
  }
  /* hover (double-ampersand needed for specificity reasons. */
  && .MuiInput-underline:hover:before {
    border-bottom-color: white;
  }
  /* focused */
  .MuiInput-underline:after {
    border-bottom-color: white;
  }
  > label {
    color: white;
  }
  > label.Mui-focused {
    color: white;
  }
`;
