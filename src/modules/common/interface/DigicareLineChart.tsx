export interface DigicareLineChartProps {
  xLabels?: string[];
  series?: Array<IDigicareLineChartSeries>;
  height?: number;
  width?: number;
}

export interface IDigicareLineChartSeries {
  data: Array<number>;
  label: string;
}
