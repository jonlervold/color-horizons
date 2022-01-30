import generateUTScl from "./util/generateUTScl";

const UTModeReadoutTable = ({
  index,
  otObject,
  sclData,
  handleSetPlayerClick,
}) => {
  const setPlayerObject = {
    tool: "ut",
    scale: otObject.centsValues,
    sclData: sclData,
    mode: index + 1,
  };
  return (
    <div>
      <h2>
        Mode {index + 1}
        <br />
        <button onClick={() => handleSetPlayerClick(setPlayerObject)}>
          Use In Player
        </button>
        <button
          onClick={() =>
            generateUTScl(otObject.centsValues, sclData, index + 1)
          }
        >
          Export .scl
        </button>
      </h2>
      <br />
      <table>
        <tbody>
          <tr>
            <td>Step</td>
            <td>Ratio</td>
            <td>Value</td>
            <td>Difference</td>
          </tr>
          {otObject.ratios.map((values, valueIndex) => (
            <tr key={valueIndex}>
              <td>Step {valueIndex}</td>
              <td>
                {otObject.ratios[valueIndex][0]} /{" "}
                {otObject.ratios[valueIndex][1]}
              </td>
              <td>{otObject.centsValues[valueIndex].toFixed(5)}</td>
              <td>
                {valueIndex === 0
                  ? "-"
                  : otObject.stepDifferences[valueIndex].toFixed(5)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UTModeReadoutTable;