import { ComparisonWindow } from "../../RatioComparer/ComparisonWindow";
import IPModeReadoutTable from "./IPModeReadoutTable";
import convertPatternToModesObjects from "./util/convertPatternToModesObjects";

const IPAllModes = ({ pattern, selectedComparison }) => {
  const allIPObjects = convertPatternToModesObjects(pattern);
  return (
    <div>
      {allIPObjects.map((ipObject, index) => (
        <div key={index}>
          <IPModeReadoutTable ipObject={ipObject} index={index} />
          <br />
          <ComparisonWindow
            scale={ipObject.mode}
            selectedComparison={selectedComparison}
          />
        </div>
      ))}
    </div>
  );
};

export default IPAllModes;
