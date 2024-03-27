import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import "./Drawer.scss";
import { useTranslation } from "react-i18next";
import { DigicareDrawerProps } from "./interface";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutesList } from "../../../router/RoutesList";
import styles from "../../../assets/styles/_variable.module.scss";
import { DigiCareTitle } from "../title/title";
import { DigicarePopOver } from "../../common/components/DigicarePopOver";
import { AvatarPopOverComp } from "../../avatarPopOverContent";
import { Avatar as ProfileAvatar, Typography } from "@mui/material";
import { AppContext } from "../../../context/app";
import { ContextProps } from "../../../context/interface";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
const drawerWidth = 240;

export function DigiCareDrawer({ children }: DigicareDrawerProps, props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user } = React.useContext(AppContext) as ContextProps;
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
  const location = useLocation();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <List>
        {RoutesList.map((data) => {
          if (
            data.renderDrawerComponents &&
            (data.valid_role === "all" || data.valid_role === user?.role)
          )
            return (
              <motion.div
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
              >
                <ListItem key={t(data.name)} disablePadding>
                  <ListItemButton onClick={() => navigate(data.link)}>
                    <motion.div
                      className="animatable"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <ListItemText
                        sx={{
                          "& .MuiListItemText-primary": { fontSize: "1.6rem" },
                        }}
                        className="navbar-router-text"
                      >
                        {t(data.name)}
                      </ListItemText>
                    </motion.div>
                  </ListItemButton>
                </ListItem>
              </motion.div>
            );
          else return <></>;
        })}
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap component="div">
            {t(
              RoutesList.find((route) => route.link === location.pathname)
                ?.name as string
            )}
          </Typography>
          <ProfileAvatar
            className="avatar-position"
            aria-describedby={id}
            onClick={handleClick}
            src={process.env.REACT_APP_FRONTEND_HOST + user?.profile_pic}
          />
          <DigicarePopOver
            open={open}
            anchorEl={anchorEl}
            id={id}
            handleClose={handleClose}
          >
            <AvatarPopOverComp />
          </DigicarePopOver>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              width: styles.navbarWidth,
              boxSizing: "border-box",
              backgroundColor: styles.navbarTitleBackgroundColor,
              boxShadow: styles.generalBoxShadow,
              overflow: "hidden",
            },
          }}
        >
          <Toolbar>
            <DigiCareTitle />
          </Toolbar>
          <Divider />
          <div className="doctor-details" style={{ textAlign: "center" }}>
            {/* <img
              alt={"Digicare Logo"}
              src={"https://ibb.co/BBcC738"}
            /> */}
            <img
              src="https://i.ibb.co/SB531yq/digicare-logo.png"
              alt="digicare-logo"
              className="digicare-logo"
            />
          </div>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              width: styles.navbarWidth,
              boxSizing: "border-box",
              backgroundColor: styles.navbarTitleBackgroundColor,
              boxShadow: styles.generalBoxShadow,
              overflow: "hidden",
            },
          }}
          open
        >
          <Toolbar>
            <DigiCareTitle />
          </Toolbar>
          <Divider />
          <div className="doctor-details" style={{ textAlign: "center" }}>
            <img
              src="https://i.ibb.co/SB531yq/digicare-logo.png"
              alt="digicare-logo"
              className="digicare-logo"
            />
          </div>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
