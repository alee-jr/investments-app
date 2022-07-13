import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(prop) => prop.theme.colors.primary};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 30px;
  border-bottom: 1px solid ${(prop) => prop.theme.colors.tertiary};

  > span {
    font-size: 14px;
    opacity: 0.7;
  }

  > p {
    margin: 0;
  }
`;

export const Title = styled.a`
  text-decoration: none;
  color: ${(prop) => prop.theme.colors.secondary};
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
