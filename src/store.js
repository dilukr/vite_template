import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './models/page1'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})