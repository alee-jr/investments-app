import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ALL_NEWS } from "../../../graphql/queries";
import { NewsSentiment } from "../../../types/news-sentiment.type";
import List from "./List";
import { Container, Title } from "./styles";

const queryAllNews = GET_ALL_NEWS;

export default function News() {
  const { data, loading, error } = useQuery(queryAllNews, {
    variables: {
      tickers: "GOOG",
      topics: "technology",
    },
  });
  const [news, setNews] = useState<NewsSentiment[]>([]);

  useEffect(() => {
    if (!loading && data && data.newsSentiment) {
      setNews(data.newsSentiment);
    }
  }, [data, loading]);

  return (
    <Container>
      <Title>Últimas de Alphabet</Title>
      <List news={news} />
    </Container>
  );
}
