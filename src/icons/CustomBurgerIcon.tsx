import { Grid, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";

export const CustomBurgerIcon = () => {
  const { t } = useTranslation();
  return (
    <Grid display={"flex"}>
      <MenuIcon className="hamburger-menu-icon" />{" "}
      <Typography className="hamburger-menu-title">{t("name.text")}</Typography>
    </Grid>
  );
};
