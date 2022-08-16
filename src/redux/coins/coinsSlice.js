import { createSlice } from '@reduxjs/toolkit';

export const coinsSlice = createSlice({
  name: 'Coins',
  initialState: {
    value: 0
  },
  reducers: {
    incrementByAmount: state => {
      state.value += 1
    },
  }
})

// Action creators are generated for each case reducer function
export const { increment} = coinsSlice.actions

export default coinsSlice.reducer