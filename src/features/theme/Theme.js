import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { changeTextColor } from './ThemeSlice'
export default function Theme() {
    const [color,setColor] = useState("white")
    const dispatch = useDispatch()
  return (
    <div>
        <input className=' button input' type='text' onChange={(e)=>{setColor(e.target.value)}} />
      <button className='button theme' onClick={()=>{dispatch(changeTextColor(color))}}> Change text color</button>
    
    </div>
  )
}
