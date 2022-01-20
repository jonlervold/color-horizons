import "./App.css";
import React, { useEffect, useState } from "react";
import { Selector } from "./components/Selector";
import { CalculatorWindow } from "./components/CalculatorWindow";
import { stateTable } from "./stateData";
import { ComparisonOptions } from "./apps/RatioComparer/ComparisonOptions";
import Player from "./apps/Player/Index";

function App() {
  const [stateData, setStateData] = useState(stateTable);

  // these could be lifted up to stateTable
  const [selectedView, setSelectedView] = useState("ut");

  useEffect(() => {
    console.log(stateData);
  }, [stateData]);

  const onViewSelect = (viewId) => {
    setSelectedView(viewId);
  };
  const [selectedComparison, setSelectedComparison] = useState("harmonics6");
  const onComparisonSelect = (comparisonId) => {
    setSelectedComparison(comparisonId);
  };

  const handleShowPlayerClick = () => {
    let newState = stateData.map((stateTableRow) => {
      let showPlayer = !stateData[9].showPlayer;
      if (stateTableRow.id === "j") {
        return {
          ...stateTableRow,
          showPlayer: showPlayer,
        };
      }
      return stateTableRow;
    });
    setStateData(newState);
  };

  const handleSetPlayerClick = (playerData) => {
    let newState = stateData.map((stateTableRow) => {
      if (stateTableRow.id === "j") {
        return {
          ...stateTableRow,
          playerData: playerData,
        };
      }
      return stateTableRow;
    });
    setStateData(newState);
  };

  return (
    <div>
      <h1>MICROTONAL EXPLORER</h1>
      <h1>Scale Player</h1>
      <button onClick={() => handleShowPlayerClick()}>Show/Hide Player</button>
      <Player
        showPlayer={stateData[9].showPlayer}
        playerData={stateData[9].playerData}
        selectedComparison={selectedComparison}
      />
      <br />
      <h1>Scale Creation Tools</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <Selector onViewSelect={onViewSelect} />
            </td>
            <td>
              <ComparisonOptions onComparisonSelect={onComparisonSelect} />
            </td>
          </tr>
          <br />
        </tbody>
      </table>
      <CalculatorWindow
        viewId={selectedView}
        stateData={stateData}
        setStateData={setStateData}
        selectedComparison={selectedComparison}
        handleSetPlayerClick={handleSetPlayerClick}
      />
      <br />
    </div>
  );
}

export default App;

// TO ADD
// ------

// playback method, with ability to play single notes, chords, or split keyboard of both too!
// - with that, ability to choose size of chords, or maybe also just approximations like in scala

// ability to generate and export .scl files from each scale

// comparison window

// create permalink for sharing scale via url

// set decimal accuracy of readouts? at least set to 6 instead of 5

// to do - lift other states in app.js to stateData table

// re-figure out how comparison window works, refactor if needed
