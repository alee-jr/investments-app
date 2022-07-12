import ReactECharts, { EChartsOption } from "echarts-for-react";

export interface ReactEChartsProps {
  options: EChartsOption;
  theme?: "light" | "dark";
}

export default function Graphs({ options, theme = "dark" }: ReactEChartsProps) {
  return <ReactECharts option={options} theme={theme} />;
}
