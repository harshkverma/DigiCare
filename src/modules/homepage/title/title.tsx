import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./title.scss";
import { useNavigate } from "react-router-dom";
import { routesName } from "../../../router/RoutesList";

export const DigiCareTitle = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Typography
      className="digicare-nav-title"
      onClick={() => navigate(routesName.dashboard)}
    >
      {t("name.text")}
    </Typography>
  );
};
