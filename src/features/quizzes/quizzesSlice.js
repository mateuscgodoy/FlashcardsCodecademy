import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz(state, action) {
      state.quizzes = {
        ...state.quizzes,
        [action.payload.id]: action.payload
      };
    }
  }
});

export const createNewQuiz = (quiz) => {
  return (dispatch) => {
    dispatch({ type: "quizzes/addQuiz", payload: quiz });
    dispatch({
      type: "topics/addQuizId",
      payload: { quizId: quiz.id, topicId: quiz.topicId }
    });
  };
};

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
