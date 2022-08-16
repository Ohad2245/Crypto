import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment } from './coinsSlice'

export function Coins() {
  const coins = useSelector(state => state.coins.value)
  // const dispatch = useDispatch()

  return (
    <div>
      
    </div>
  )
}