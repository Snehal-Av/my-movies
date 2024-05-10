import React, { useState } from 'react'
import CompB from './CompB'

const CompA = () => { 
    const [exA,setExA]=useState("nn")
  return (
    <div >
        <h1>CompA</h1>
     
       <button onClick={()=>setExA("updated")}>Click</button>
       <CompB   exA={exA}/>
    </div>
  )
}

export default CompA