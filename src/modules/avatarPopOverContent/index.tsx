import { Button, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "./style.scss";
import { useContext } from "react";
import { AppContext } from "../../context/app";
import { ContextProps } from "../../context/interface";

export const AvatarPopOverComp = () => {
  const { t } = useTranslation();
  const { user, setIsSignedIn, setUsername } = useContext(
    AppContext,
  ) as ContextProps;

  return (
    <Grid>
      <Stack className="avatar-in-pop-over">
        <Avatar
          alt="Remy Sharp"
          src={process.env.REACT_APP_FRONTEND_HOST + user?.profile_pic}
          sx={{ width: 100, height: 100 }}
        />
      </Stack>
      <Stack className="avatar-pop-over-details-grid">
        <Typography variant="h5" className="avatar-pop-over-details">
          <p>{"User: "}</p>
          <p>{user?.user_name}</p>
        </Typography>
        <Typography variant="h5" className="avatar-pop-over-details">
          <p>{"Email: "}</p>
          <p>{user?.email}</p>
        </Typography>
        <Typography variant="h5" className="avatar-pop-over-details">
          <p>{"Contact Number: "}</p>
          <p>{user?.contact_number}</p>
        </Typography>
      </Stack>
      <Stack className="avatar-pop-over-buttons-grid">
        {/* {getRoutesLink()} */}
        <Button
          variant="text"
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("userName");
            setIsSignedIn(false);
            setUsername(null);
          }}
        >
          {t("button.logout")}
        </Button>
      </Stack>
    </Grid>
  );
};
