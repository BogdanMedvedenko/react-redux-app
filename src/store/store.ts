import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "./redux/feedbackSlice/feedbackSlice";
import counterReducer from "./redux/counterSlice/counterSlice";

export const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
    counter: counterReducer,                  
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;