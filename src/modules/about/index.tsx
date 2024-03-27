import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./style.scss";

export const About = () => {
  const { t } = useTranslation();
  return (
    <Grid className="about-us-grid">
      <Typography variant="h3" className="about-us-title">
        {t("about.title")}
      </Typography>
      <div
        className="about-us-content"
        dangerouslySetInnerHTML={{ __html: t("about.content") }}
      />
    </Grid>
  );
};
