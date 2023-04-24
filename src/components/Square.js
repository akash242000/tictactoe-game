import React from 'react'

export default function Square({handleClick, value}) {
  return (
    <div>
      <button className='square' onClick={()=>{handleClick(value)}}>{value}</button>
    </div>
  )
}
