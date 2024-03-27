import { makeStyles } from "tss-react/mui";
import styles from "../../assets/styles/_variable.module.scss";

export const useIconsStyle = makeStyles()(() => ({
  defaultIconClass: {
    cursor: "pointer",
  },
  smallSize: {
    width: styles.smallIconSize,
    height: styles.smallIconSize,
  },
  mediumSize: {
    width: styles.mediumIconSize,
    height: styles.mediumIconSize,
  },
  largeSize: {
    width: styles.largeIconSize,
    height: styles.largeIconSize,
  },
}));
