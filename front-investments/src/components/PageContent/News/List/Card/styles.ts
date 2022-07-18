import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextDate = styled.span`
  font-size: 14px;
  opacity: 0.7;
  margin-top: 1rem;
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

export const Text = styled.p`
  margin: 0;
`;
