import PageTags from "../components/PageTags";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import Graph from "../components/Graphs";
import _ from "lodash";
import { Daily } from "../types/daily.type";
import { Investments } from "../types/investments.type";

const pageTagsProps = {
  title: "Teste Front-End",
  description: "Teste técnico VELT",
};

export default function Home(investments: Investments) {
  const { daily, newsSentiment } = investments;
  const rawData = daily.map((item: Daily) =>
    Object.values(_.omit(item, "date", "volume"))
  );
  const data = rawData.map((item: string[]) => [
    +item[0],
    +item[3],
    +item[2],
    +item[1],
  ]);
  const dates = daily.map((item: Daily) => item.date.replaceAll("-", "/"));

  const options = {
    tooltip: {
      formatter: function (param: any) {
        param = param[0];
        return [
          "<strong>" +
            param.name +
            "</strong>" +
            '<hr size=1 style="margin: 3px 0">',
          "<strong>Open:</strong> " + param.data[0] + "<br/>",
          "<strong>Close:</strong> " + param.data[1] + "<br/>",
          "<strong>Lowest:</strong> " + param.data[2] + "<br/>",
          "<strong>Highest:</strong> " + param.data[3] + "<br/>",
          "<strong>Volume:</strong> " +
            daily.find((item) => item.date === param.name.replaceAll("/", "-"))
              ?.volume +
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
      left: 0,
      top: 0,
      right: 0,
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
        data,
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
    <>
      <PageTags {...pageTagsProps} />
      <div>
        <Graph options={options} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Investments {
        daily(symbol: "GOOG", outputsize: "compact") {
          open
          high
          low
          close
          volume
          date
        }
        newsSentiment(tickers: "GOOG", topics: "technology") {
          title
          url
          time_published
          authors
          summary
          banner_image
          source
          source_domain
          category_within_source
          topics {
            topic
            relevance_score
          }
          overall_sentiment_score
          overall_sentiment_label
          ticker_sentiment {
            ticker
            relevance_score
            ticker_sentiment_score
            ticker_sentiment_label
          }
        }
      }
    `,
  });

  return {
    props: {
      ...data,
    },
  };
}
