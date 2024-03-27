export interface DigiSnackbarProps {
  message: string;
  variant: "filled" | "standard" | "outlined";
  autoHideDuration?: number;
  handleClose: () => void;
  color?: "success" | "info" | "warning" | "error";
}
