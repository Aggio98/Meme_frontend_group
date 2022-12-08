import styled from "styled-components";

export const Input = styled.input`
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 3px solid #fec260;
  border-radius: 24px;

  ::placeholder {
    color: #b6b8b7;
  }

  &:hover {
    border-color: yellow;
  }

  &:focus {
    outline: none;
    border-color: rgb(51, 51, 190);
  }
`;
