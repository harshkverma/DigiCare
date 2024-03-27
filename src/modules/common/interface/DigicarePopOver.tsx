import React from "react";

export interface DigicarePopOverProps {
  anchorEl?: HTMLDivElement | null;
  handleClose: () => void;
  id: string | undefined;
  open: boolean;
  children: React.ReactNode;
}
