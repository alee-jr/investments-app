import { gql, useQuery } from "@apollo/client";
import _ from "lodash";
import { useEffect, useState } from "react";
import { Daily } from "../../../types/daily.type";
import Graphs from "../../Graphs";
import { Container } from "./styles";

const queryAllDaily = gql`
  query {
    daily(symbol: "GOOG", outputsize: "compact") {
      open
      high
      low
      close
      volume
      date
    }
  }
`;

export default function CandleStick() {
  const { data, loading, error } = useQuery(queryAllDaily);
  const [daily, setDaily] = useState<Daily[]>([]);

  useEffect(() => {
    if (!loading && data && data.daily) {
      setDaily(data.daily);
    }
  }, [data, loading]);

  const rawData =
    daily.length > 0 &&
    daily.map((item: Daily) => Object.values(_.omit(item, "date", "volume")));

  const candleData =
    rawData &&
    rawData.map((item: string[]) => [+item[0], +item[3], +item[2], +item[1]]);

  const dates =
    daily.length > 0 &&
    daily.map((item: Daily) => item.date.replaceAll("-", "/"));

  const options = {
    tooltip: {
      formatter: function (param: any) {
        return [
          "<strong>" +
            param.name +
            "</strong>" +
            '<hr size=1 style="margin: 3px 0">',
          "<strong>Open:</strong> " + param.data[1] + "<br/>",
          "<strong>Close:</strong> " + param.data[2] + "<br/>",
          "<strong>Lowest:</strong> " + param.data[3] + "<br/>",
          "<strong>Highest:</strong> " + param.data[4] + "<br/>",
          "<strong>Volume:</strong> " +
            daily.find(
              (item: Daily) => item.date === param.name.replaceAll("/", "-")
            )?.volume +
            "<br/>",
        ].join("");
      },
    },
    xAxis: {
      type: "category",
      data: dates,
      axisLine: { lineStyle: { color: "#8392A5" } },
    },
    yAxis: {
      scale: true,
      axisLine: { lineStyle: { color: "#8392A5" } },
    },
    grid: {
      left: 40,
      top: 20,
      right: 40,
      bottom: 80,
    },
    dataZoom: [
      {
        textStyle: {
          color: "#8392A5",
        },
        handleIcon:
          "path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
        dataBackground: {
          areaStyle: {
            color: "#8392A5",
          },
          lineStyle: {
            opacity: 0.8,
            color: "#8392A5",
          },
        },
        brushSelect: true,
      },
      {
        type: "inside",
      },
    ],
    series: [
      {
        name: "Daily",
        type: "candlestick",
        data: candleData,
        itemStyle: {
          color: "#FD1050",
          color0: "#0CF49B",
          borderColor: "#FD1050",
          borderColor0: "#0CF49B",
        },
      },
    ],
  };
  return (
    <Container>
      <Graphs options={options} />
    </Container>
  );
}
