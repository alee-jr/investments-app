import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { NewsSentiment } from "../../../types/news-sentiment.type";
import List from "./List";
import { Container } from "./styles";

const queryAllNews = gql`
  query {
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
`;

export default function News() {
  const { data, loading, error } = useQuery(queryAllNews);
  const [news, setNews] = useState<NewsSentiment[]>([]);

  useEffect(() => {
    if (!loading && data && data.newsSentiment) {
      setNews(data.newsSentiment);
    }
  }, [data, loading]);

  return (
    <Container>
      <List news={news} />
    </Container>
  );
}
