import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic(state, action) {
      state.topics = {
        ...state.topics,
        [action.payload.id]: {
          ...action.payload,
          quizIds: []
        }
      };
    }
  }
});

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
