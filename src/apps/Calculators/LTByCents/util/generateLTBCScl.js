const generateLTBCScl = (scale, sclData, mode) => {
  const generator = sclData[0];
  const noteTotal = sclData[1];

  let modifiedScale = [...scale];
  modifiedScale.shift();
  modifiedScale.pop();
  modifiedScale = modifiedScale.map((value) => value.toFixed(5));
  modifiedScale.push("2/1");

  let outputString = `! LTBC-${generator}-${noteTotal}-mode${mode}
!
microtonalexplorer.com - Linear Temperament By Cents - Generator ${generator} - Note Total ${noteTotal} - Mode ${mode}
 ${noteTotal}
!`;
  for (let i = 0; i < modifiedScale.length; i++) {
    outputString += `
${modifiedScale[i]}`;
  }

  let outputBlob = new Blob([outputString], { type: "text/plain" });
  let url = window.URL.createObjectURL(outputBlob);
  let anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `LTBC-${generator}-${noteTotal}-mode${mode}.scl`;

  anchor.click();
  window.URL.revokeObjectURL(url);
  //   document.removeChild(anchor); UNNECESSARY?
};

export default generateLTBCScl;