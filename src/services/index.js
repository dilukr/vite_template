import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const GetPosts = createAsyncThunk(
  "post/getPosts", async () => await axios.get(`/api/test.json`)
);

export default GetPosts;
