import { configureStore } from '@reduxjs/toolkit'
import CoinsReducer from './counter/coinsSlice';

export default configureStore({
  reducer: {
    coins: CoinsReducer
  }
})