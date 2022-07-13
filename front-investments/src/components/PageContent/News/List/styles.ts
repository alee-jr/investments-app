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

  > p {
    margin: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  > div {
    > span {
      font-size: 14px;
      opacity: 0.7;
    }
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

export const Image = styled.img`
  height: 110px;
  width: 145px;
  border-radius: 10px;
  margin-right: 1.5rem;
`;
