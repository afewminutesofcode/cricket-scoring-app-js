import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export const MUIDialog = ({ open, onClose, ariaLabel, ariaDescribe, title, buttons, content }) => (
  <Dialog
    fullWidth
    open={open}
    onClose={onClose}
    aria-labelledby={ariaLabel}
    aria-describedby={ariaDescribe}
  >
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>{content}</DialogContent>
    <DialogActions>{buttons}</DialogActions>
  </Dialog>
);
