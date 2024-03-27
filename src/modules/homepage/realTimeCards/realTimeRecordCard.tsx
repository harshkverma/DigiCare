import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { digicareConfig } from "../../../assets/constants/config";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { capitalizeSentence } from "../../common/helper/string";
import { RealTimeRecordCardProps } from "./interface";

export const RealTimeRecordCard = ({
  data,
  validateClassName,
  setIsAlertOpen,
  isRecord,
}: RealTimeRecordCardProps) => {
  const { t } = useTranslation();
  return (
    <Card className="real-time-card-grid">
      {digicareConfig.showRealTimeDataImage && (
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={data.img}
        />
      )}
      <CardContent>
        <Typography
          className={validateClassName}
          gutterBottom
          variant="h4"
          component="div"
        >
          {data.reading ? data.reading : digicareConfig.defaultReading}{" "}
          {data.unit}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {t(capitalizeSentence(data.name.split("_").join(" ")))}
        </Typography>
      </CardContent>
      <CardActions className="real-time-card-action"></CardActions>
    </Card>
  );
};
