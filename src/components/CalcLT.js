import React, { useState } from "react";
import { CalcLTReadout1 } from "./CalcLTReadout1";
import { CalcLTReadout2 } from "./CalcLTReadout2";

export const CalcLT = ({ stateData, setStateData }) => {
  // there must be a better way to handle this giant, repetitive block
  const handleChange = (event) => {
    let fieldReader = event.target.name;
    let newValue = event.target.value;

    if (fieldReader === "ltNumerator") {
      let newState = stateData.map((scaleType) => {
        if (scaleType.id === "b") {
          return {
            ...scaleType,
            numerator: newValue,
          };
        }
        return scaleType;
      });
      setStateData(newState);
    }

    if (fieldReader === "ltDenominator") {
      let newState = stateData.map((scaleType) => {
        if (scaleType.id === "b") {
          return {
            ...scaleType,
            denominator: newValue,
          };
        }
        return scaleType;
      });
      setStateData(newState);
    }

    if (fieldReader === "ltNoteTotal") {
      let newState = stateData.map((scaleType) => {
        if (scaleType.id === "b") {
          return {
            ...scaleType,
            noteTotal: newValue,
          };
        }
        return scaleType;
      });
      setStateData(newState);
    }
  };
  const handleInvertClick = (inverseFraction) => {
    let newState = stateData.map((scaleType) => {
      if (scaleType.id === "b") {
        return {
          ...scaleType,
          numerator: inverseFraction[0],
          denominator: inverseFraction[1],
        };
      }
      return scaleType;
    });
    setStateData(newState);
  };

  // BIG PROBLEM
  // 3/2 and 4/3 return DIFFERENT MOS
  // 3/2 is INCORRECT
  // all others tested seem to be correct
  // ...12/11 gets wrong at MOS23

  return (
    <div>
      <h2>Linear Temperament</h2>
      <p>
        Numerator:
        <input
          onChange={handleChange}
          type="number"
          name="ltNumerator"
          value={stateData[1].numerator}
        ></input>
      </p>
      <p>
        Denominator:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="ltDenominator"
          value={stateData[1].denominator}
        ></input>
      </p>
      <CalcLTReadout1
        numerator={stateData[1].numerator}
        denominator={stateData[1].denominator}
        handleInvertClick={handleInvertClick}
      />
      <p>
        Note Amount:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="ltNoteTotal"
          defaultValue={stateData[1].noteTotal}
        ></input>
      </p>
      <CalcLTReadout2
        numerator={stateData[1].numerator}
        denominator={stateData[1].denominator}
        noteAmount={stateData[1].noteTotal}
      />
      <p>This table should show ratios as well</p>
      <p>
        Crashing at less than zero because values getting calc'd in
        calcltreadout2 as well
      </p>
    </div>
  );
};
