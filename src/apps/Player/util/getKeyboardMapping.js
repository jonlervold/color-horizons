const getKeyboardMapping = (hzScale, note2, note3) => {
  let keyboardMapping = {
    singles: {
      z: [hzScale[0]],
      x: [hzScale[1]],
      c: [hzScale[2]],
      v: [hzScale[3]],
      b: [hzScale[4]],
      n: [hzScale[5]],
      m: [hzScale[6]],
      ",": [hzScale[7]],
      ".": [hzScale[8]],
      "/": [hzScale[9]],
      a: [hzScale[10]],
      s: [hzScale[11]],
      d: [hzScale[12]],
      f: [hzScale[13]],
      g: [hzScale[14]],
      h: [hzScale[15]],
      j: [hzScale[16]],
      k: [hzScale[17]],
      l: [hzScale[18]],
      ";": [hzScale[19]],
      "'": [hzScale[20]],
      q: [hzScale[21]],
      w: [hzScale[22]],
      e: [hzScale[23]],
      r: [hzScale[24]],
      t: [hzScale[25]],
      y: [hzScale[26]],
      u: [hzScale[27]],
      i: [hzScale[28]],
      o: [hzScale[29]],
      p: [hzScale[30]],
      "[": [hzScale[31]],
      "]": [hzScale[32]],
      1: [hzScale[33]],
      2: [hzScale[34]],
      3: [hzScale[35]],
      4: [hzScale[36]],
      5: [hzScale[37]],
      6: [hzScale[38]],
      7: [hzScale[39]],
      8: [hzScale[40]],
      9: [hzScale[41]],
      0: [hzScale[42]],
      "-": [hzScale[43]],
      "=": [hzScale[44]],
    },
    chords: {
      z: [hzScale[0], hzScale[0 + note2], hzScale[0 + note3]],
      x: [hzScale[1], hzScale[1 + note2], hzScale[1 + note3]],
      c: [hzScale[2], hzScale[2 + note2], hzScale[2 + note3]],
      v: [hzScale[3], hzScale[3 + note2], hzScale[3 + note3]],
      b: [hzScale[4], hzScale[4 + note2], hzScale[4 + note3]],
      n: [hzScale[5], hzScale[5 + note2], hzScale[5 + note3]],
      m: [hzScale[6], hzScale[6 + note2], hzScale[6 + note3]],
      ",": [hzScale[7], hzScale[7 + note2], hzScale[7 + note3]],
      ".": [hzScale[8], hzScale[8 + note2], hzScale[8 + note3]],
      "/": [hzScale[9], hzScale[9 + note2], hzScale[9 + note3]],
      a: [hzScale[10], hzScale[10 + note2], hzScale[10 + note3]],
      s: [hzScale[11], hzScale[11 + note2], hzScale[11 + note3]],
      d: [hzScale[12], hzScale[12 + note2], hzScale[12 + note3]],
      f: [hzScale[13], hzScale[13 + note2], hzScale[13 + note3]],
      g: [hzScale[14], hzScale[14 + note2], hzScale[14 + note3]],
      h: [hzScale[15], hzScale[15 + note2], hzScale[15 + note3]],
      j: [hzScale[16], hzScale[16 + note2], hzScale[16 + note3]],
      k: [hzScale[17], hzScale[17 + note2], hzScale[17 + note3]],
      l: [hzScale[18], hzScale[18 + note2], hzScale[18 + note3]],
      ";": [hzScale[19], hzScale[19 + note2], hzScale[19 + note3]],
      "'": [hzScale[20], hzScale[20 + note2], hzScale[20 + note3]],
      q: [hzScale[0]],
      w: [hzScale[1]],
      e: [hzScale[2]],
      r: [hzScale[3]],
      t: [hzScale[4]],
      y: [hzScale[5]],
      u: [hzScale[6]],
      i: [hzScale[7]],
      o: [hzScale[8]],
      p: [hzScale[9]],
      "[": [hzScale[10]],
      "]": [hzScale[11]],
      1: [hzScale[12]],
      2: [hzScale[13]],
      3: [hzScale[14]],
      4: [hzScale[15]],
      5: [hzScale[16]],
      6: [hzScale[17]],
      7: [hzScale[18]],
      8: [hzScale[19]],
      9: [hzScale[20]],
      0: [hzScale[21]],
      "-": [hzScale[22]],
      "=": [hzScale[23]],
    },
  };
  return keyboardMapping;
};

export default getKeyboardMapping;