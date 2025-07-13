import React, { useState } from 'react'

export default function UserInput({onchangeinput, userInput}) {
    

  
  return (
  <section id="user-input">
 <div className='input-group'>
    <p>
        <label>Initial Investment</label>
        <input type="number" value={userInput.initialInvestment} required onChange={(e)=>onchangeinput('initialInvestment', e.target.value)}/>
    </p>
    <p>
        <label>Annual Investment</label>
        <input  type="number"  value={userInput.annualInvestment} required onChange={(e)=>onchangeinput('annualInvestment', e.target.value)}/>
    </p>
    
 </div>
 <div className='input-group'>
<p>
        <label>Expected Return </label>
        <input  type="number" value={userInput.expectedReturn} required onChange={(e)=>onchangeinput('expectedReturn', e.target.value)}/>
    </p>
    <p>
        <label>Duration</label>
        <input  type="number"  value={userInput.duration} required onChange={(e)=>onchangeinput('duration', e.target.value)}/>
    </p>
 </div>
  </section>
  )
}
