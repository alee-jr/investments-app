import ReactECharts, { EChartsOption } from "echarts-for-react";

export interface ReactEChartsProps {
  options: EChartsOption;
  theme?: "light" | "dark";
}

export default function Graphs({ options, theme }: ReactEChartsProps) {
  return (
    <ReactECharts
      style={{
        height: "500px",
        width: "100%",
      }}
      option={options}
      theme={theme}
    />
  );
}
