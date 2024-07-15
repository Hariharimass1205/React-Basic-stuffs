import react, { useState } from 'react'

function App(){
let [color1,setColor1] = useState("black")

function handleChangeColor(color){
setColor1(color)
}
 return(
  <>
  <div>
  <div className='box' style={{backgroundColor:color1}}></div>
  <button onClick={()=>setColor1('red')}  className='button1'>red</button>
  <button onClick={()=>handleChangeColor("blue")} className='button2'>blue</button>
  <button onClick={()=>handleChangeColor("yellow")} className='button3'>yellow</button>
  </div>
  </>
 )
}

export default App