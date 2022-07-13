import CandleStick from "./CandleStick";
import News from "./News";
import { Container } from "./styles";

export default function PagesContent() {
  return (
    <Container>
      <CandleStick />
      <News />
    </Container>
  );
}
