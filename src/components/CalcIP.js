import { CalcIPReadout } from "./CalcIPReadout";

export const CalcIP = ({ stateData, setStateData, selectedComparison }) => {
  const handleChange = (event) => {
    const newPattern = event.target.value;
    let newState = stateData.map((stateTableRow) => {
      if ((stateTableRow.id = "c")) {
        return {
          ...stateTableRow,
          pattern: newPattern,
        };
      }
      return stateTableRow;
    });
    setStateData(newState);
  };

  return (
    <div>
      <div>
        <h2>Interval Pattern</h2>
        <input
          onChange={handleChange}
          type="number"
          name="intervalPatternEntryField"
          value={stateData[2].pattern}
        ></input>
      </div>
      <div>
        <p></p>
        <CalcIPReadout
          pattern={stateData[2].pattern}
          selectedComparison={selectedComparison}
        />
      </div>
    </div>
  );
};
