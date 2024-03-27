import { DigiCareIconEnum, DigiCareIconsProps, IconSize } from "./interface";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors";
import { useIconsStyle } from "./style";
import clsx from "clsx";
import { Avatar, Grid } from "@mui/material";
import RingVolumeIcon from "@mui/icons-material/RingVolume";
import SosIcon from "@mui/icons-material/Sos";

export const DigiCareIcons = ({
  title,
  size,
  iconFor,
  className,
  style,
  onClick,
}: DigiCareIconsProps) => {
  const { classes } = useIconsStyle();

  const classNames = clsx({
    [classes.defaultIconClass]: true,
    [classes.smallSize]: size && size === IconSize.small,
    [classes.mediumSize]: size && size === IconSize.medium,
    [classes.largeSize]: size && size === IconSize.large,
    [className || ""]: className && className,
  });

  switch (iconFor) {
    case DigiCareIconEnum.feed:
      return (
        <DynamicFeedIcon
          titleAccess={title}
          className={classNames}
          style={style}
        />
      );
    case DigiCareIconEnum.avatar:
      return <Avatar className={classNames} style={style} onClick={onClick} />;
    case DigiCareIconEnum.sosCall:
      return (
        <Grid>
          <SosIcon /> <RingVolumeIcon />
        </Grid>
      );
    default:
      return <RunningWithErrorsIcon />;
  }
};
