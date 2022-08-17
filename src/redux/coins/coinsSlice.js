import { createSlice } from '@reduxjs/toolkit';

export const CoinsSlice = createSlice({
  name: 'setCoins',
  // initialState : Replaces the first state
  // Enters all the parameters I want

  initialState: {
    value: [],
  },
  reducers: {
    setCoins: (state,action) => {
          state.value = action.payload
    }
  }
})


// Action creators are generated for each case reducer function
export const {setCoins} = CoinsSlice.actions

export default CoinsSlice.reducer