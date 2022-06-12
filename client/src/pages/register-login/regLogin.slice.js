import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  response: {},
  isLoading: false,
};

const regLoginSlice = createSlice({
  name: "regLogin",
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = true;
    },
    setResponse: (state, action) => {
      console.log(action);
      state.response = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = regLoginSlice;
export const { setIsLoading, setResponse } = actions;
export default reducer;
