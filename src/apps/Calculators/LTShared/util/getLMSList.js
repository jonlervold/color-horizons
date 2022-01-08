import getUniqueSteps from "../../../../util/getUniqueSteps";

const getLMSList = (stepDifferences) => {
  let sortedUnique = getUniqueSteps(stepDifferences);

  let lSize = 0;
  let mSize = 0;
  let sSize = 0;

  if (sortedUnique.length === 1) {
    lSize = sortedUnique[0].toFixed(5);
  }
  if (sortedUnique.length === 2) {
    lSize = sortedUnique[0].toFixed(5);
    sSize = sortedUnique[1].toFixed(5);
  }
  if (sortedUnique.length === 3) {
    lSize = sortedUnique[0].toFixed(5);
    mSize = sortedUnique[1].toFixed(5);
    sSize = sortedUnique[2].toFixed(5);
  }

  const valueToLms = (value) => {
    if (value.toFixed(5) === lSize) {
      return "L";
    }
    if (value.toFixed(5) === mSize) {
      return "𝚖";
    }
    if (value.toFixed(5) === sSize) {
      return "s";
    }
  };

  // take mapped LMS and create new list from previous values
  let lmsList = stepDifferences.map((value) => valueToLms(value));

  lmsList.shift();

  return lmsList;
};

export default getLMSList;
