import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMemes } from "../../store/memes/selectors";
import { fetchAllMemes } from "../../store/memes/thunks";
import "./memePage.css";

const MemePage = () => {
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
    <div>
      <h1>meme page heree</h1>
      {allMemes.map((meme, index) => {
        return (
          <div key={index} className="meme_card">
            <img src={meme.imgUrl} alt="meme" width="500px" />
          </div>
        );
      })}
    </div>
  );
};
export default MemePage;
