import { apiUrl } from "../../config/constants";
import axios from "axios";
import { showMessageWithTimeout } from "../appState/thunks";
import { newMeme } from "./slice";

export const fetchAllMemes = () => async (dispatch, getState) => {
  try {
    const getMemes = await axios.get(`${apiUrl}/memes`);
    console.log("memes from thunk", getMemes.data);
    dispatch(newMeme(getMemes.data));
  } catch (e) {
    console.log(e.message);
  }
};

export const postMeme = (imgUrl) => async (dispatch, getState) => {
  try {
    //const { profile, token } = getState().user;
    console.log("image", imgUrl);
    const response = await axios.post(
      `${apiUrl}/memes/`,
      {
        imgUrl,
      }
      // {
      //   headers: { Authorization: `Bearer ${token}` },
      // }
    );
    console.log("Response newEvent", response.data);
    dispatch(showMessageWithTimeout("success", true, "Meme Created"));
    dispatch(fetchAllMemes());
  } catch (e) {
    console.error(e);
  }
};
