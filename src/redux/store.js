import { configureStore } from '@reduxjs/toolkit'
import CoinsReducer from './coins/coinsSlice';

export default configureStore({
  reducer: {
    coins: CoinsReducer
  }
})