import { Container, Title } from "./styles";

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  return (
    <Container>
      <Title>{props.title}</Title>
    </Container>
  );
}
