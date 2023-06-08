import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, incrementByAmount } from './CounterSlice'
function Counter() {
 const count = useSelector((state) => state.counter.count)
 const color = useSelector((state) => state.theme.color)
 const dispatch = useDispatch()
 return (
  <div className="app">
   

   <span className="value" style={{color:color}} >Count: {count}</span>
   <button className="button btn1" aria-label="Increment value" onClick={() => { dispatch(increment()) }}> + </button>
   <button className="button btn2" aria-label="Decrement value" onClick={() => { dispatch(decrement()) }}> - </button>
   <button className="button btn3" onClick={() => { dispatch(incrementByAmount(10)) }}> Increment by 10 </button>
  
  </div>
 )
}

export default Counter