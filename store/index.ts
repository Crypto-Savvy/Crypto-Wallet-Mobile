import { configureStore } from "@reduxjs/toolkit";

import buyReducer from "./buySlice";

const store = configureStore({
  reducer: {
    buy: buyReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
