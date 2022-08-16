import { createSlice } from '@reduxjs/toolkit';

export const coinsSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
  }
})

// Action creators are generated for each case reducer function
export const { increment} = coinsSlice.actions

export default coinsSlice.reducer