import * as S from "./styles";

interface TagProps {
  label: string;
}

interface TagColorsProps {
  name: string;
  color: string;
}

const tagColors: TagColorsProps[] = [
  {
    name: "Somewhat-Bullish",
    color: "warning",
  },
  {
    name: "Bullish",
    color: "success",
  },
  {
    name: "Somewhat-Bearish",
    color: "attention",
  },
  {
    name: "Bearish",
    color: "danger",
  },
];

export default function Tag(props: TagProps) {
  return (
    <S.Container
      data-testid="tag"
      color={tagColors.find((tag) => tag.name === props.label)?.color || ""}
    >
      {props.label != "Neutral" && (
        <>
          <S.Arrow down={props.label.includes("Bearish")} />

          <S.Text>{props.label}</S.Text>
        </>
      )}
    </S.Container>
  );
}
