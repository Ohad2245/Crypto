import { createSlice } from '@reduxjs/toolkit';

export const CoinsSlice = createSlice({
  name: 'coins',
  // initialState : Replaces the first state
  // Enters all the parameters I want

  initialState: {
    value: [],
  },
  reducers: {
    setCoins: (state,action) => {
      state.value = action.payload
    },
    setDownCoins: (state,action) =>{
      state.value = action.payload
    },
    setUpCoins: (state,action) =>{
      state.value = action.payload
    }
  }
})


// Action creators are generated for each case reducer function
export const {setCoins,setDownCoins,setUpCoins,setSearch} = CoinsSlice.actions

export default CoinsSlice.reducer