import { createSlice } from "@reduxjs/toolkit";

type FeedbackState = {
  like: number;
  dislike: number;
};

const initialState: FeedbackState = {
  like: 0,
  dislike: 0,
};

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    addLike: (state) => {
      state.like += 1;
    },
    addDislike: (state) => {
      state.dislike += 1;
    },
    resetResults: (state) => {
      state.like = 0;
      state.dislike = 0;
    },
  },
});

export const feedbackActions = feedbackSlice.actions;
export default feedbackSlice.reducer;