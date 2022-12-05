import { configureStore } from "@reduxjs/toolkit";

import memeReducer from "./memes/slice"
import userReducer from "./user/slice";
import appStateReducer from "./appState/slice";

const store = configureStore({
  reducer: {
    memes: memeReducer,
    user: userReducer,
    appState: appStateReducer,
  },
});

export default store;