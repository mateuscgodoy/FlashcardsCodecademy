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
    },
    addQuizId(state, action) {
      //   console.log(Object.keys(state.topics));
      Object.keys(state.topics).map((topicId) => {
        // console.log(topicId.id);
        // console.log(action.payload);
        if (topicId === action.payload.topicId) {
          state.topics[topicId].quizIds.push(action.payload.quizId);
          console.log(state.topics[topicId].quizIds);
        }
        return topicId;
      });
    }
  }
});

export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;
