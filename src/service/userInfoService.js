import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserInfoThunk } from '../slice/userInfoSlice';

// slice에서 받은 api에 대해서 데이터를 저장하는 곳
const userInfoService = createSlice({
    name: "userInfo",
    initialState: {
      userInfo: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUserInfoThunk.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchUserInfoThunk.fulfilled, (state, action) => {
          state.loading = false;
          state.userInfo = action.payload; // response.data
        })
        .addCase(fetchUserInfoThunk.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default userInfoService.reducer; // reducer: 새 상태를 반환하는 함수