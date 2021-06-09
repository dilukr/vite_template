import { createSlice } from '@reduxjs/toolkit'
//import GetPosts from '../services/index'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    getUser: (state, action) => {
      state.users = action.payload;
    },

    increment: (state,action) => {
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
  // extraReducers: {
  //   [GetPosts.fulfilled]: (state, action) => {
  //     state.posts = action.payload.data;
  //   },
  //   [GetPosts.rejected]: (state, action) => {
  //    state.posts = [];
  //   }
  // }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,getUser } = counterSlice.actions

export default counterSlice.reducer