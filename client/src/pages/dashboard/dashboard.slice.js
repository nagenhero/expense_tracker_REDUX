import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  response: {},
  transactions: [],
};
const dashboardSlice = createSlice({
  name: "dashboard", 
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = true;
    },
    setResponse: (state, { payload }) => {
      state.response = payload;
      state.isLoading = false;
    },
    setTransactions: (state, { payload }) => {
      state.transactions = payload;
    },
  },
});

const { reducer, actions } = dashboardSlice;

// export const { setIsLoading, setResponse, setTransactions } = actions;

export default reducer;
export const {setIsLoading, setResponse, setTransactions} = actions