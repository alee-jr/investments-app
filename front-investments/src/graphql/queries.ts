import { gql } from "@apollo/client";

export const GET_ALL_NEWS = gql`
  query getAllNews($tickers: String, $topics: String) {
    newsSentiment(tickers: $tickers, topics: $topics) {
      title
      url
      time_published
      summary
      banner_image
      overall_sentiment_label
    }
  }
`;

export const GET_ALL_DAILY = gql`
  query getAllDaily {
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
