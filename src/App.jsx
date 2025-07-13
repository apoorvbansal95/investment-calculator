import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"
import React, { useState } from 'react'

function App() {
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
                [inputidentifier]:+newValue
            }
        })
    }
  return (<>
    <Header/>
    <UserInput onchangeinput={handlechange} userInput={userInput}/>
    <Results userInput={userInput}/>
    </>
  )
}

export default App
