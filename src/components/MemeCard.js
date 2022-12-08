import "./memeCardStyle.css";
import styled from "styled-components";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useSelector } from "react-redux";
import { selectFavs } from "../store/user/selectors";
import { useEffect, useState } from "react";

export const MemeCard = (props) => {
  const favList = useSelector(selectFavs);
  const [favor, setFavor] = useState(false);

  useEffect(() => {
    if (favList) {
      for (let i = 0; i < favList.length; i++) {
        if (favList[i].id === props.id) {
          setFavor(true);
        }
      }
    }
  }, [favList]);

  return (
    <Card>
      {favor === true ? <p>❤️</p> : <p>🖤</p>}
      <StyledImage alt="" src={props.imgUrl} />
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
