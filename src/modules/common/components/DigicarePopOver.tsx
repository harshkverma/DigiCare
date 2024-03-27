import { Popover } from "@mui/material";
import { DigicarePopOverProps } from "../interface/DigicarePopOver";
import "../styles/DigicarePopOver.scss";

export const DigicarePopOver = ({
  anchorEl,
  open,
  id,
  handleClose,
  children,
}: DigicarePopOverProps) => {
  return (
    <Popover
      className="digicare-pop-over"
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      classes={{
        paper: "digicare-pop-over-paper",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {children}
    </Popover>
  );
};
