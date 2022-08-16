import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment } from './coinsSlice'
import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      
    </div>
  )
}