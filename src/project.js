import React, { useState } from 'react'
import './App.css'

function Project() {
  
const[colorvalue,setcolorvalue]=useState('')
const[hexvalue,sethexvalue]=useState('')
const[darktext,setdarktext]=useState('')







    return (
        <>
<form onSubmit={(e)=>e.preventDefault()}>
    <label>Add color Name</label>

<input
autoFocus
type="text"
value={colorvalue}
onChange={(e)=>{

setcolorvalue(e.target.value);



}}
/>
<button
type="button"
onClick={()=>setdarktext(!darktext)}
>
toggle
</button>


</form>



<div className='box'
id="box" 

style={{

backgroundColor:colorvalue,
color:darktext?'#000':'#FFF'


}}

>
<p>{colorvalue? colorvalue:'Empty Value'}</p>
<p>{hexvalue ? hexvalue:null}</p>


</div>
</>
    
  )
}

export default Project