/* eslint-disable @next/next/no-img-element */
import moment from "moment";
import { NewsSentiment } from "../../../../types/news-sentiment.type";
import Card from "./Card";
import { Container, Content } from "./styles";
import Tag from "./Tag";

interface ListProps {
  news: NewsSentiment[];
}

export default function List(props: ListProps) {
  return (
    <Container>
      {props.news &&
        props.news.map((item, index) => (
          <Content key={index}>
            <Card
              banner_image={item.banner_image}
              url={item.url}
              title={item.title}
              summary={item.summary}
              time_published={item.time_published}
            />
            <Tag label={item.overall_sentiment_label} />
          </Content>
        ))}
    </Container>
  );
}
