import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  memeImg: null,
};

export const memeSlice = createSlice({
  name: "memes",
  initialState,
  reducers: {
    newMeme: (state, action) => {
      console.log(state, "state event");
      state.memeImg = action.payload;
    },
  },
});

export const { newMeme } = memeSlice.actions;
export default memeSlice.reducer;
