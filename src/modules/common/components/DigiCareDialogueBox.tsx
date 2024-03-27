import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DigicareDialogueBoxProps } from "../interface/DigicareDiallogueBox";

export default function DigicareAlertDialog({
  title,
  content,
  okButtonText,
  cancelButtonText,
  isOpen,
  handleClose,
  handleNewRecordings,
}: DigicareDialogueBoxProps) {
  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {cancelButtonText && (
            <Button onClick={handleClose} autoFocus>
              {cancelButtonText}
            </Button>
          )}
          {okButtonText && (
            <Button variant="contained" onClick={handleNewRecordings}>
              {okButtonText}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
