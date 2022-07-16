import { gql } from "@apollo/client";

export const GET_ALL_NEWS = gql`
  query getAllNews($tickers: String, $topics: String) {
    newsSentiment(tickers: $tickers, topics: $topics) {
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
