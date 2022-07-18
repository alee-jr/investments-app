import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(prop) => prop.theme.colors.primary};
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px 30px;
  border-bottom: 1px solid ${(prop) => prop.theme.colors.tertiary};
  justify-content: space-between;
`;
