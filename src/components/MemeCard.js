import styled from "styled-components";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

export const MemeCard = (props) => {
  return (
    <Card>
      <p>
        <FcLikePlaceholder />
      </p>
      <StyledImage alt="" src={props.imgUrl} />
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  width: 300px;
  height: auto;
  text-align: center;
  border-radius: 8px;
  background: #ffffff;
`;

const StyledImage = styled.img`
  margin: 8px;
  max-width: 300px;
  border-radius: 8px;
`;
