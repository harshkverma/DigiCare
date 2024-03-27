// History component
import Typography from "@mui/material/Typography";
import {
  DigicareAccordion,
  DigicareAccordionDetails,
  DigicareAccordionSummary,
} from "../common/components/DigicareAccordian";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { HistoryProps } from "./interface";
import { capitalizeSentence } from "../common/helper/string";
import "./style.scss";
import { getAllRealTimeData } from "../../api/patient";
import { RealTimeDataProps } from "../homepage/realTimeCards/interface";
import { digicareConfig } from "../../assets/constants/config";
import { DigicareSnackbar } from "../common/components/DigiSnackbar";
import { DigicareLineChart } from "../common/components/DigicareLineChart";
import { Grid } from "@mui/material";
import DigiCareAutocomplete from "../common/components/DigicareAutoComplete";
import { DigicareAutoCompleteDataProps } from "../common/interface/DigicareAutoComplete";

export const History = ({ username }: HistoryProps) => {
  const [expanded, setExpanded] = useState<string | false>("panel1");
  const [history, setHistory] = useState<RealTimeDataProps[]>();
  const [apiErrorMessage, setApiErrorMessage] = useState<string>();
  const [graphOptionSelected, setGraphOptionSelected] =
    useState<Array<string>>();

  useEffect(() => {
    getAllRealTimeData(username)
      .then((res) => setHistory(res.data.data))
      .catch(() => {
        setApiErrorMessage("No history recorded for this user");
      });
  }, []);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const handleClose = () => {
    setApiErrorMessage(undefined);
  };

  const graphOptions = [
    {
      label: "Blood Pressure (Systolic)",
      value: "bp_sys",
    },
    {
      label: "Blood Pressure (Diastolic)",
      value: "bp_dias",
    },
    {
      label: "O2",
      value: "o2",
    },
    {
      label: "Heart Rate",
      value: "heart_rate",
    },
    {
      label: "Temperature",
      value: "temp",
    },
  ];

  const getXLabels = useMemo(() => {
    const dummyHist = history?.slice();

    return dummyHist
      ?.sort((a, b) => {
        if (a.timestamp < b.timestamp) return -1;
        else return 1;
      })
      ?.map((hist) => {
        return hist.timestamp;
      });
  }, [history]);

  const getSystolicSeries = useMemo(() => {
    const dummyHist = history?.slice();

    return dummyHist
      ?.sort((a, b) => {
        if (a.timestamp < b.timestamp) return -1;
        else return 1;
      })
      ?.map((hist) => {
        return Number(hist.blood_pressure.split("/")[0]);
      });
  }, [history]);

  const getDiastolicSeries = useMemo(() => {
    const dummyHist = history?.slice();

    return dummyHist
      ?.sort((a, b) => {
        if (a.timestamp < b.timestamp) return -1;
        else return 1;
      })
      ?.map((hist) => {
        return Number(hist.blood_pressure.split("/")[1]);
      });
  }, [history]);

  const getSeriesData = (parameter) => {
    const dummyHist = history?.slice();
    return dummyHist
      ?.sort((a, b) => {
        if (a.timestamp < b.timestamp) return -1;
        else return 1;
      })
      ?.map((hist, i) => {
        return hist[parameter] && !isNaN(hist[parameter])
          ? Number(hist[parameter])
          : 0;
      });
  };

  const graph = {
    bp_sys: getSystolicSeries,
    bp_dias: getDiastolicSeries,
    temp: getSeriesData("temperature"),
    o2: getSeriesData("o2"),
    heart_rate: getSeriesData("heart_rate"),
  };

  const renderGraph = useMemo(() => {
    if (graphOptionSelected)
      return graphOptionSelected?.map((selectedO) => {
        return {
          data: graph[selectedO],
          label: graphOptions.find((go) => go.value === selectedO)?.label,
        };
      });
  }, [graphOptionSelected]);

  const handleGraphOptionChange = (data: DigicareAutoCompleteDataProps[]) => {
    const selectedOptions = data?.map((d) => {
      return d.value;
    });
    setGraphOptionSelected(selectedOptions as string[]);
  };

  const h = history?.slice();
  return (
    <>
      <Grid container className="history-container" spacing={5}>
        <Grid
          item
          xs={12}
          md={5}
          className="real-constants-history-graph-setting-container"
        >
          <DigiCareAutocomplete
            className="real-constants-history-auto-complete"
            placeHolder="Select Data set"
            isMultiSelect
            data={graphOptions}
            handleAutocompleteChange={handleGraphOptionChange}
          />
          {graphOptionSelected?.length ? (
            <DigicareLineChart
              xLabels={getXLabels}
              series={renderGraph || []}
              height={550}
            />
          ) : (
            <></>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          {h
            ?.sort((a, b) => {
              if (a.timestamp < b.timestamp) return 1;
              else return -1;
            })
            ?.map((data: RealTimeDataProps) => {
              return (
                <DigicareAccordion
                  expanded={expanded === data.record_id}
                  onChange={handleChange(data.record_id)}
                  key={data.record_id}
                >
                  <DigicareAccordionSummary
                    aria-controls={`${data.record_id}-content`}
                    id={`${data.record_id}-header`}
                  >
                    <Typography className="summary-accoidian-heading">
                      {data.timestamp.toLocaleString()}
                    </Typography>
                  </DigicareAccordionSummary>
                  <DigicareAccordionDetails>
                    <Typography className="history-record-text-wrapper">
                      {Object.keys(data)?.map((readings, index) => {
                        if (
                          Object.keys(digicareConfig.realtimeUnits).includes(
                            readings
                          )
                        ) {
                          return (
                            <Typography
                              variant="body1"
                              key={readings + "-" + index}
                              className="body-data-accordian"
                            >
                              <span className="history-record-text-title">
                                {capitalizeSentence(
                                  readings.split("_").join(" ")
                                )}
                                :
                              </span>{" "}
                              {data[readings]}
                              {digicareConfig.realtimeUnits[readings].unit}
                            </Typography>
                          );
                        }
                      })}
                    </Typography>
                  </DigicareAccordionDetails>
                </DigicareAccordion>
              );
            })}
        </Grid>
      </Grid>
      <DigicareSnackbar
        message={apiErrorMessage}
        autoHideDuration={6000}
        color="error"
        variant="filled"
        handleClose={handleClose}
      />
    </>
  );
};
