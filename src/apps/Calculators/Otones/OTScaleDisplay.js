import getReducedFraction from "../../../util/getReducedFraction";

const OTScaleDisplay = ({ rawScale, showEquivalent, handleShowEquivalent }) => {
  let rawEquivalentTitle = "";
  if (showEquivalent === false) {
    rawEquivalentTitle = "Raw Values";
  }
  if (showEquivalent === true) {
    rawEquivalentTitle = "Equivalent Values";
  }
  const getSingleRatioForScaleDisplay = (numerator, denominator) => {
    if (showEquivalent === false) {
      return `${numerator}/${denominator}`;
    }
    if (showEquivalent === true) {
      let reduced = getReducedFraction(numerator, denominator);
      return `${reduced[0]}/${reduced[1]}`;
    }
  };

  const scaleDisplay = rawScale.map((ratio) => (
    <td>{getSingleRatioForScaleDisplay(ratio[0], ratio[1])}</td>
  ));

  return (
    <div>
      <p>
        <button onClick={() => handleShowEquivalent()}>
          Raw/Equivalent Values
        </button>
      </p>
      <h4>{rawEquivalentTitle}</h4>
      <table>
        <tbody>
          <tr>{scaleDisplay}</tr>
        </tbody>
      </table>
    </div>
  );
};

export default OTScaleDisplay;