import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
      console.log(action.payload);
    },
  },

  extraReducers: {
    //   [listUsers.pending]: (state, action) => {
    //     state.loader = true;
    //   },
    //   [listUsers.fulfilled]: (state, action) => {
    //     state.loader = false;
    //     state.users = action.payload;
    //     state.usersContainer = action.payload;
    //   },
    //   [listUsers.rejected]: (state, action) => {
    //     state.loader = false;
    //     console.log("Dispalyed from Reducers", action.payload);
    //     state.errors = action.payload;
    //   },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
