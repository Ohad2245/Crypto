import { configureStore } from '@reduxjs/toolkit'
import CoinsReducer from './coins/coinsSlice';

/*
מרכז בתוכו את כל הסלייסים והרדוסר שאני משתמש בהם
בסטור עושים קונפיגורצייה לרידאקס בעזרת הרדיוסר
*/
export default configureStore({
  reducer: {
    coins: CoinsReducer,
  },
  
})