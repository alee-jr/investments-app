import moment from "moment";
import { Container, Group, Title, Image, Text } from "./styles";
import { TextDate } from "./styles";

interface CardProps {
  banner_image: string | null;
  url: string;
  title: string;
  summary: string;
  time_published: string;
}

export default function Card(props: CardProps) {
  return (
    <Container>
      <Group>
        <Image src={props.banner_image || ""} alt="" />
      </Group>
      <Group>
        <Title target="_blank" href={props.url} rel="noopener noreferrer">
          {props.title}
        </Title>
        <Text>{props.summary}</Text>
        <TextDate>
          {moment(props.time_published, "YYYYMMDDhhmmss").format(
            "YYYY/MM/DD hh:mm:ss"
          )}
        </TextDate>
      </Group>
    </Container>
  );
}
