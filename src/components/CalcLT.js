import React, { useState } from "react";
import { CalcLTReadout } from "./CalcLTReadout";

export const CalcLT = ({}) => {
  const [selectedNumerator, setSelectedNumerator] = useState("3")
  const [selectedDenominator, setSelectedDenominator] = useState("2")
  const [selectedNoteAmount, setSelectedNoteAmount] = useState("7")
  // unclear on how target.value works
  const handleNumeratorChange = (userInput => setSelectedNumerator(userInput.target.value))
  const handleDenominatorChange = (userInput => setSelectedDenominator(userInput.target.value))
  const handleNoteAmountChange = (userInput => setSelectedNoteAmount(userInput.target.value))
    return (
      <div>
      <h2>Linear Temperament</h2>
      <p>Numerator: <input onChange={handleNumeratorChange} type="number" name="numeratorEntered" defaultValue="3"></input></p>
      <p>Denominator: <input onChange={handleDenominatorChange} type="number" name="denominatorEntered" defaultValue="2"></input></p>
      <p>Note Amount: <input onChange={handleNoteAmountChange} type="number" name="noteAmountEntered" defaultValue="7"></input></p>
      <CalcLTReadout 
      numerator = {selectedNumerator}
      denominator = {selectedDenominator}
      noteAmount = {selectedNoteAmount} />
      </div>
    )
  }