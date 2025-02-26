import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios를 실행해서 api를 받아온다.
export const userSlice = createAsyncThunk("users/fetchUsers", async () => {
    const response = await axios.get("http://localhost:8080/users");
    console.log("response.data", response.data);
    return response.data;
  });

