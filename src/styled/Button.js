import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.primary ? "#ffffff" : "#22eaaa")};
  color: ${(props) => (props.primary ? "#22eaaa" : "#ffffff")};
  margin: 8px;
  padding: 12px 20px;
  border: 2px solid #22eaaa;
  border-radius: 24px;
  font-family: Fredoka One;
  font-size: 18px;

  &:hover {
    border: 2px solid yellow;
    text-shadow: 2px 2px 0 rgb(51, 51, 190);
    box-shadow: 2px 2px 0 rgb(51, 51, 190);
  }

  &:active {
    transform: scale(0.9);
    background: blue;
  }
`;
