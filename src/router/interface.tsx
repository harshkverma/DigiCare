import React from "react";

export interface IRoutesPath {
  name: string;
  link: string;
  id: string;
  renderDrawerComponents: boolean;
  component: React.ReactNode;
  valid_role: string;
}
