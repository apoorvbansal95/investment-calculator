import React, { useState } from 'react'

export default function UserInput() {
    const[userInput, setuserInput]= useState({
        initialInvestment:10000, 
        annualInvestment:1200, 
        expectedReturn:6, 
        duration:10
    })

    function handlechange(inputidentifier, newValue){
        setuserInput(prevUserInput=>{
            return {
                ...prevUserInput, 
                [inputidentifier]:newValue
            }
        })
    }
  return (
  <section id="user-input">
 <div className='input-group'>
    <p>
        <label>Initial Investment</label>
        <input type="number" value={userInput.initialInvestment} required onChange={(e)=>handlechange('initialInvestment', e.target.value)}/>
    </p>
    <p>
        <label>Annual Investment</label>
        <input  type="number"  value={userInput.annualInvestment} required onChange={(e)=>handlechange('annualInvestment', e.target.value)}/>
    </p>
    
 </div>
 <div className='input-group'>
<p>
        <label>Expected Return </label>
        <input  type="number" value={userInput.expectedReturn} required onChange={(e)=>handlechange('expectedReturn', e.target.value)}/>
    </p>
    <p>
        <label>Duration</label>
        <input  type="number"  value={userInput.duration} required onChange={(e)=>handlechange('duration', e.target.value)}/>
    </p>
 </div>
  </section>
  )
}
