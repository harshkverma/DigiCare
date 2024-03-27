import { Alert, Snackbar } from "@mui/material";
import { DigiSnackbarProps } from "../interface/DigiSnackbar";

export const DigicareSnackbar = ({
  message,
  variant,
  autoHideDuration,
  handleClose,
  color,
}: DigiSnackbarProps) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={!!message}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
    >
      <Alert
        style={{ display: "flex", alignItems: "center", fontSize: "1.2rem" }}
        onClose={handleClose}
        severity={color}
        variant={variant}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
