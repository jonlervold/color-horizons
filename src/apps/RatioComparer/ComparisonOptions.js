export const ComparisonOptions = ({ stateData, setStateData }) => {
  const handleApproximationEntry = (event) => {
    if (event.target.name === "closeApproximation") {
      let newValue = Number(event.target.value);
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "k") {
          return {
            ...stateTableRow,
            closeApproximation: newValue,
          };
        }
        return stateTableRow;
      });
      setStateData(newState);
    }

    if (event.target.name === "approximationBoundary") {
      let newValue = Number(event.target.value);
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "k") {
          return {
            ...stateTableRow,
            approximationBoundary: newValue,
          };
        }
        return stateTableRow;
      });
      setStateData(newState);
    }
  };

  const handleComparisonSelect = (comparisonId) => {
    let newState = stateData.map((stateTableRow) => {
      if (stateTableRow.id === "k") {
        return {
          ...stateTableRow,
          comparison: comparisonId,
        };
      }
      return stateTableRow;
    });
    setStateData(newState);
  };

  return (
    <div>
      <h2>Comparison Window Options</h2>
      Close Approximation:{" "}
      <input
        type="number"
        name="closeApproximation"
        min="1"
        max={stateData[10].approximationBoundary - 1}
        value={stateData[10].closeApproximation}
        onChange={handleApproximationEntry}
      ></input>{" "}
      Cents
      <br />
      Approximation Boundary:{" "}
      <input
        type="number"
        name="approximationBoundary"
        min={stateData[10].closeApproximation}
        max="1200"
        value={stateData[10].approximationBoundary}
        onChange={handleApproximationEntry}
      ></input>{" "}
      Cents
      <br />
      <br />
      <button onClick={() => handleComparisonSelect("majorDiatonic")}>
        Major Diatonic
      </button>
      <button onClick={() => handleComparisonSelect("primes")}>
        Prime Harmonics
      </button>
      <br />
      <button onClick={() => handleComparisonSelect("harmonics6")}>
        Harmonic Series to 6
      </button>
      <button onClick={() => handleComparisonSelect("harmonics17")}>
        Harmonic Series to 17
      </button>
      <br />
      <button onClick={() => handleComparisonSelect("3")}>3 Limit</button>
      <button onClick={() => handleComparisonSelect("5")}>5 Limit</button>
      <button onClick={() => handleComparisonSelect("7")}>7 Limit</button>
      <br />
      <button onClick={() => handleComparisonSelect("11")}>11 Limit</button>
      <button onClick={() => handleComparisonSelect("13")}>13 Limit</button>
      <button onClick={() => handleComparisonSelect("17")}>17 Limit</button>
      <br />
      <br />
      <button onClick={() => handleComparisonSelect("off")}>Disable</button>
    </div>
  );
};
