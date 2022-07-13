/* eslint-disable @next/next/no-img-element */
import moment from "moment";
import { NewsSentiment } from "../../../../types/news-sentiment.type";
import { Container, Content, Title, Image, Group } from "./styles";

interface ListProps {
  news: NewsSentiment[];
}

export default function List(props: ListProps) {
  return (
    <Container>
      {props.news &&
        props.news.slice(1, 10).map((item, index) => (
          <Content key={index}>
            <Group>
              <div>
                <Image src={item.banner_image || ""} alt="" />
              </div>
              <div>
                <Title
                  target="_blank"
                  href={item.url}
                  rel="noopener noreferrer"
                >
                  {item.title}
                </Title>
                <p>{item.summary}</p>
                <span>
                  {moment(item.time_published, "YYYYMMDDhhmmss").format(
                    "YYYY/MM/DD hh:mm:ss"
                  )}
                </span>
              </div>
            </Group>
          </Content>
        ))}
    </Container>
  );
}
