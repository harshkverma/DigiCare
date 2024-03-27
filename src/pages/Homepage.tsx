import { Grid } from "@mui/material";
import "./style.scss";
import { RealTimeCards } from "../modules/homepage/realTimeCards";
import { DigiCareDrawer } from "../modules/homepage/drawer/Drawer";
import { useContext } from "react";
import { AppContext } from "../context/app";
import { ContextProps } from "../context/interface";
import { EUserRole } from "../modules/avatarPopOverContent/interface";
import { AdminOperations } from "./AdminOperations";

export const Homepage = () => {
  const { user } = useContext(AppContext) as ContextProps;
  return (
    <Grid className="homepage-background">
      <DigiCareDrawer>
        {user?.role === EUserRole.admin ? (
          <AdminOperations />
        ) : (
          <RealTimeCards />
        )}
      </DigiCareDrawer>
    </Grid>
  );
};
