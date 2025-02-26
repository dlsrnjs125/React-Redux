// Redux Store Configuration (store.js)
import { configureStore } from "@reduxjs/toolkit";
import userList from "../service/userService";
import userInfo from "../service/userInfoService";

const store = configureStore({
  reducer: {
    userList,
    userInfo,
  },
});

export default store;