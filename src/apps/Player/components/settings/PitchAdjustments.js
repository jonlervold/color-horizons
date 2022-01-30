const PitchAdjustments = ({
  generalReferencePitch,
  octaveAdjust,
  handleChange,
}) => {
  return (
    <div>
      <br />
      Reference Pitch
      <br />0 - 1000 Hz
      <br />
      <input
        type="range"
        min="20"
        max="1000"
        value={generalReferencePitch}
        onChange={handleChange}
        name="referencePitch"
      ></input>
      <br />
      <input
        type="number"
        min="20"
        max="1000"
        value={generalReferencePitch}
        onChange={handleChange}
        name="referencePitch"
      ></input>{" "}
      Hz
      <br />
      <br />
      Octave Adjust
      <br />
      -3 - +3
      <br />
      <input
        name="octaveAdjust"
        type="range"
        min="-3"
        max="3"
        value={octaveAdjust}
        onChange={handleChange}
      ></input>
      <br />
      <input
        name="octaveAdjust"
        type="number"
        min="-3"
        max="3"
        value={octaveAdjust}
        onChange={handleChange}
      ></input>
      <br />
      <br />
    </div>
  );
};

export default PitchAdjustments;