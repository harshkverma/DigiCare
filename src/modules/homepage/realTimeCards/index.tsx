import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import "./style.scss";
import { useTranslation } from "react-i18next";
import DigicareAlertDialog from "../../common/components/DigiCareDialogueBox";
import { RealTimeDataProps, RealTimeRecordProps } from "./interface";
import { AppContext } from "../../../context/app";
import { ContextProps } from "../../../context/interface";
import { EUserRole } from "../../avatarPopOverContent/interface";
import { RealTimeRecordCard } from "./realTimeRecordCard";
import {
  DigicareAccordion,
  DigicareAccordionDetails,
  DigicareAccordionSummary,
} from "../../common/components/DigicareAccordian";
import { DigiCareIcons } from "../../../assets/icon";
import { DigiCareIconEnum } from "../../../assets/icon/interface";
import { getLatestRealTimeData } from "../../../api/patient";
import { digicareConfig } from "../../../assets/constants/config";
import { IDoctorHistory } from "../../doctorHistory/interface";
import { motion } from "framer-motion";
import { DigicareCircularLoader } from "../../common/components/DigicareCircularLoader";
import { Button } from "@mui/material";

export const RealTimeCards = () => {
  const { t } = useTranslation();
  const [isAlertOpen, setIsAlertOpen] = React.useState<boolean>(false);
  const { user } = React.useContext(AppContext) as ContextProps;
  const [realData, setRealData] = React.useState<
    Array<RealTimeDataProps | undefined>
  >([]);
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [dangerRealTimeData, setDamgerRealTimeData] = React.useState<
    Array<string>
  >([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  React.useEffect(() => {
    if (user?.role === EUserRole.patient) {
      getLatestRealTimeData(user.user_name).then((res) => {
        setRealData([res.data.data]);
        setIsLoading(false);
      });
    } else if (user?.role === EUserRole.doctor) {
      setRealData([]);
      let realDataDummy = [];
      (user as IDoctorHistory).patients?.forEach((p) => {
        getLatestRealTimeData(p)
          .then((res) => {
            if (res.data.data) realDataDummy.push(res.data.data);
            else realDataDummy.push({ patient_username: p });
          })
          .catch((e) => {
            realDataDummy.push({ patient_username: p });
          });
      });
      setTimeout(() => {
        setRealData(realDataDummy);
        setIsLoading(false);
      }, 1000);
    }
  }, [user?.user_name]);

  const handleNewRecordings = () => {
    setIsLoading(true);
    if (user?.role === EUserRole.patient) {
      getLatestRealTimeData(user.user_name).then((res) => {
        setRealData([res.data.data]);
        setIsAlertOpen(false);
        setIsLoading(false);
      });
    }
  };

  const validateData = (
    data: RealTimeRecordProps,
    realTimePatientId: string
  ) => {
    if (data.reading) {
      const dataMinMax = data.reading.split("/");
      if (dataMinMax.length === 1) {
        if (
          Number(dataMinMax) >= Number(data.min_value) &&
          Number(dataMinMax) <= Number(data.max_value)
        ) {
          return "valid-real-time-data";
        } else {
          dangerRealTimeData.indexOf(realTimePatientId) < 0 &&
            setDamgerRealTimeData((prevState) => {
              prevState.push(realTimePatientId);
              return prevState;
            });
          return "invalid-real-time-data";
        }
      } else {
        if (
          Number(dataMinMax[0]) >= Number(data.min_value?.split("/")[0]) &&
          Number(dataMinMax[1]) >= Number(data.min_value?.split("/")[1]) &&
          Number(dataMinMax[0]) <= Number(data.max_value?.split("/")[0]) &&
          Number(dataMinMax[1]) <= Number(data.max_value?.split("/")[1])
        ) {
          return "valid-real-time-data";
        } else {
          dangerRealTimeData.indexOf(realTimePatientId) < 0 &&
            setDamgerRealTimeData((prevState) => {
              prevState.push(realTimePatientId);
              return prevState;
            });
          return "invalid-real-time-data";
        }
      }
    }
  };

  const traverseDataToCard = (data: RealTimeDataProps) => {
    if (data) {
      return (
        <>
          {Object.keys(data).map((realObjKey) => {
            if (
              Object.keys(digicareConfig.realtimeUnits).includes(realObjKey)
            ) {
              const dataAsRealTimeRecordProps: RealTimeRecordProps = {
                name: realObjKey,
                reading: data[realObjKey as keyof RealTimeDataProps],
                unit: digicareConfig.realtimeUnits[realObjKey].unit,
                min_value: digicareConfig.realtimeUnits[realObjKey].min,
                max_value: digicareConfig.realtimeUnits[realObjKey].max,
              };
              return (
                <RealTimeRecordCard
                  data={dataAsRealTimeRecordProps}
                  validateClassName={validateData(
                    dataAsRealTimeRecordProps,
                    user.user_name
                  )}
                  setIsAlertOpen={setIsAlertOpen}
                  isRecord={user?.role === EUserRole.patient}
                />
              );
            } else return <></>;
          })}
        </>
      );
    } else {
      return <Typography variant="h4">No Data Found</Typography>;
    }
  };

  const traverseAccordian = React.useMemo(() => {
    if (user?.role === EUserRole.doctor) {
      if (!isLoading && realData && realData.length) {
        return realData.map((rtData, index) => {
          return (
            <DigicareAccordion
              expanded={expanded === (user as IDoctorHistory).patients[index]}
              onChange={handleChange((user as IDoctorHistory).patients[index])}
              className={
                dangerRealTimeData.indexOf(
                  (user as IDoctorHistory).patients[index]
                ) >= 0
                  ? "pateint-record-danger-accordian"
                  : "pateint-record-accordian"
              }
            >
              <DigicareAccordionSummary
                aria-controls={`${(user as IDoctorHistory).patients[index]}-pateint-record-content`}
                id={`${(user as IDoctorHistory).patients[index]}-pateint-record-header`}
                className="pateint-records-list-accordian-summary"
              >
                <Typography>
                  {(user as IDoctorHistory).patients[index]}
                </Typography>
                <DigiCareIcons iconFor={DigiCareIconEnum.sosCall} />
              </DigicareAccordionSummary>
              <DigicareAccordionDetails>
                {rtData ? traverseDataToCard(rtData) : <>No Data Found</>}
              </DigicareAccordionDetails>
            </DigicareAccordion>
          );
        });
      } else {
        return (
          <Grid className="patient-no-list-grid">
            <Typography variant="h5">
              No Patients has been assigned to {user?.name}
            </Typography>
          </Grid>
        );
      }
    }
  }, [user, realData, expanded]);

  return (
    <Grid className="real-time-data-grid">
      {isLoading ? (
        <DigicareCircularLoader loading={isLoading} />
      ) : user?.role === EUserRole.patient ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Grid className="real-time-record-grid">
            {realData?.map((data) => {
              return traverseDataToCard(data);
            })}
          </Grid>
        </motion.div>
      ) : (
        user?.role === EUserRole.doctor && traverseAccordian
      )}
      {user?.role === EUserRole.patient && (
        <Button
          size="medium"
          variant="contained"
          color="warning"
          className="record-data-button"
          onClick={() => setIsAlertOpen(true)}
        >
          <b>{t("real_time_dashboard.record.name")}</b>
        </Button>
      )}
      {isAlertOpen && (
        <DigicareAlertDialog
          isOpen={isAlertOpen}
          handleClose={() => setIsAlertOpen(false)}
          handleNewRecordings={handleNewRecordings}
          title={t("real_time_dashboard.record.alert.title")}
          okButtonText={t("real_time_dashboard.record.alert.okButtonTitle")}
          content={t("real_time_dashboard.record.alert.content")}
          cancelButtonText={t("real_time_dashboard.record.alert.cancel")}
        />
      )}
    </Grid>
  );
};
