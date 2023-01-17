import { configureStore } from "@reduxjs/toolkit";
import magasinReducer from "./magasinSlice";

const store = configureStore({
  reducer: {
    magasin: magasinReducer,
  },
});

export default store;
