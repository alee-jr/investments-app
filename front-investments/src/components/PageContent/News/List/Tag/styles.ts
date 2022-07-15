import styled from "styled-components";

interface ContainerProps {
  color: string;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${(prop) => prop.theme.colors[prop.color]};
  height: 20px;
  border-radius: 6px;
  padding: 2px 6px;
  margin-left: 8px;
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  font-size: 11px;
  line-height: 18px;
  color: white;
  font-weight: bold;
  white-space: nowrap;
`;

interface ArrowProps {
  down: boolean;
}

export const Arrow = styled.span<ArrowProps>`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  ${(prop) =>
    prop.down
      ? `border-top: 5px solid white`
      : `border-bottom: 5px solid white`};
  margin-right: 0.3rem;
`;
