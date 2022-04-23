import { createSlice } from "@reduxjs/toolkit";
import { singleUser } from "../actions/userActions";

const singleReducer = createSlice({
  name: "singleUser",
  initialState: {
    errors: {},
    loader: false,
    user: {},
  },

  //   reducers: {
  //     filteredUser: (state, action) => {
  //       state.users = state.usersContainer.filter((user) => user.name.toLowerCase().includes(action.payload));
  //     },
  //   },
  extraReducers: {
    [singleUser.pending]: (state, action) => {
      state.loader = true;
    },
    [singleUser.fulfilled]: (state, action) => {
      state.loader = false;
      state.user = action.payload;
    },
    [singleUser.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
  },
});

export default singleReducer.reducer;
