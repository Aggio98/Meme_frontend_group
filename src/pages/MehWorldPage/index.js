import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { selectMemes } from "../../store/memes/selectors";
import { fetchAllMemes } from "../../store/memes/thunks";
import { Container, Title } from "../../styled";
import { MemeCard } from "../../components";

const MehWorldPage = () => {
  const dispatch = useDispatch();
  const allMemes = useSelector(selectMemes);
  console.log("memes from selector", allMemes);
  useEffect(() => {
    dispatch(fetchAllMemes());
  }, []);
  if (!allMemes)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  return (
    <Container>
      <Title>MEhMEh's</Title>
      <CardContainer>
        {allMemes.map((meme) => {
          return <MemeCard key={meme.id} imgUrl={meme.imgUrl} id={meme.id} />;
        })}
      </CardContainer>
    </Container>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px;
  justify-content: center;
`;

export { MehWorldPage };
