import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { DigicareLineChartProps } from "../interface/DigicareLineChart";

export const DigicareLineChart = ({
  xLabels,
  series,
  height,
  width,
}: DigicareLineChartProps) => {
  return (
    <LineChart
      width={width}
      height={height}
      series={series}
      xAxis={[{ scaleType: "point", data: xLabels || ["a"] }]}
    />
  );
};
