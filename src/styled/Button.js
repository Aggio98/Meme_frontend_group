import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.primary ? "#ffffff" : "#22eaaa")};
  color: ${(props) => (props.primary ? "#22eaaa" : "#ffffff")};
  margin: 8px;
  padding: 12px 20px;
  border: 2px solid #22eaaa;
  border-radius: 24px;
  font-family: Fredoka One;

  &:hover {
    border: 2px solid #fec260;
  }
`;
