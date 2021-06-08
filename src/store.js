import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './models/page1';
import page2Reducer from './models/page2';

export default configureStore({
  reducer: {
    counter: counterReducer,
    page2: page2Reducer
  }
})