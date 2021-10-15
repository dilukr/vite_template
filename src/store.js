import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './models/page1';
import page2Reducer from './models/page2';


//configureStore 替换 createStore, 
//相当于初始化store
export default configureStore({
  reducer: {
    counter: counterReducer,
    page2: page2Reducer
  }
})