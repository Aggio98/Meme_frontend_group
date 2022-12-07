import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.primary ? "#ffffff" : "#f10086")};
  color: ${(props) => (props.primary ? "#f10086" : "#ffffff")};
  margin: 8px;
  padding: 12px 20px;
  border: 2px solid #f10086;
  border-radius: 24px;
  font-family: Fredoka One;

  &:hover {
    border: 2px solid #fec260;
  }
`;
