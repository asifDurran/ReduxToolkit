import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import usersReducer from "./reducers/userReducer";
import singleReducer from "./reducers/singleReducer";
import counterSlice from "./reducers/countReducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    singleUser: singleReducer,
    counter: counterSlice,
  },
  middleware: [...getDefaultMiddleware()],
});

export default store;