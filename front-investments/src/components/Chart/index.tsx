import ReactECharts, { EChartsOption } from "echarts-for-react";

export interface ReactEChartsProps {
  options: EChartsOption;
  theme?: "light" | "dark";
}

export default function Chart({ options, theme }: ReactEChartsProps) {
  return (
    <ReactECharts
      style={{
        height: "100%",
        width: "100%",
      }}
      option={options}
      theme={theme}
    />
  );
}
