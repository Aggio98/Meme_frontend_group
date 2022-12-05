import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  memeImg: null,
};

export const memeSlice = createSlice({
  name: "memes",
  initialState,
  reducers: {},
});

export const {} = memeSlice.actions;
export default memeSlice.reducer;