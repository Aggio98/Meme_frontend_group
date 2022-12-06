import { apiUrl } from "../../config/constants";
import axios from "axios";
import { showMessageWithTimeout } from "../appState/thunks";
import { newMeme } from "./slice";

export const postMeme = (imgUrl) => async (dispatch, getState) => {
  try {
    //const { profile, token } = getState().user;
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
    dispatch(newMeme(response.data.imgUrl));
  } catch (e) {
    console.error(e);
  }
};
