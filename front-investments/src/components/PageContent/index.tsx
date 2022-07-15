import Daily from "./Daily";
import News from "./News";
import { Container } from "./styles";

export default function PagesContent() {
  return (
    <Container>
      <Daily />
      <News />
    </Container>
  );
}
