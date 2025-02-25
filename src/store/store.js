// Redux Store Configuration (store.js)
import { configureStore } from "@reduxjs/toolkit";
import userList from "./service/userService";

const store = configureStore({
  reducer: {
    userList,
  },
});

export default store;