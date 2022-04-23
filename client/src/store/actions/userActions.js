import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'


export const listUsers = createAsyncThunk("users", async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(response)
    return response.data;
  } catch (error) {
    console.log(error.response);
    return error.response.data;
  }
});

export const singleUser = createAsyncThunk('user', async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    return response.data;
})
