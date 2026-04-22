import {configureStore} from "@reduxjs/toolkit";

const dummyReducer = (state = {}, action) => {
  return state;
};

export const store = configureStore({
  reducer: {
    // Add your reducers here
    dummy: dummyReducer
  },
});

