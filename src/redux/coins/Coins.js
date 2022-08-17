import React from 'react'
import { useSelector,} from 'react-redux'

export function Coins() {
  const coins = useSelector(state => state.coins.value)
  // const dispatch = useDispatch()

  return (
    <div>
      
    </div>
  )
}