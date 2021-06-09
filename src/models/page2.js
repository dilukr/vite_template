import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await axios.get(`/api/test.json?useid=${userId}`)
    return response.data
  }
)



export const page2Slice = createSlice({
  name: 'page2',
  initialState: {
    value: 0,
    test: "123"
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchUserById.fulfilled]: (state, action) => {
      // Add user to the state array
      console.log(action.payload)
      state.value = action.payload.code
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = page2Slice.actions

export default page2Slice.reducer