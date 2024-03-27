import { Grid, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { CustomHamburgerIconProps } from "./interface";
import clsx from "clsx";

export const CustomBurgerIcon = ({
  title,
  className,
  style,
}: CustomHamburgerIconProps) => {
  const classNames = clsx({
    ["hamburger-menu-icon"]: true,
    [className || ""]: className,
  });

  return (
    <Grid display={"flex"}>
      <MenuIcon className={classNames} />{" "}
      <Typography className="hamburger-menu-title">{title}</Typography>
    </Grid>
  );
};
