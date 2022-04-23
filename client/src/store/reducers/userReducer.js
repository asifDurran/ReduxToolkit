import { createSlice } from "@reduxjs/toolkit";
import { listUsers } from "../actions/userActions";
const usersReducer = createSlice({
  name: "users",
  initialState: {
    users: [],
    usersContainer: [],
    errors: {},
    loader: false,
  },
  reducers: {
    filteredUser: (state, action) => {
      state.users = state.usersContainer.filter((user) =>
        user.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: {
    [listUsers.pending]: (state, action) => {
      state.loader = true;
    },
    [listUsers.fulfilled]: (state, action) => {
      state.loader = false;
      state.users = action.payload;
      state.usersContainer = action.payload;
    },
    [listUsers.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
  },
});
export const { filteredUser } = usersReducer.actions;
export default usersReducer.reducer;