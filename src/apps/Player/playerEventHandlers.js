export const handleChordsSinglesClick = (
  event,
  playerState,
  setPlayerState
) => {
  let newState = { ...playerState, chordsOrSingles: event.target.name };
  setPlayerState(newState);
};

export const handleTypeClick = (event, playerState, setPlayerState) => {
  let newState = { ...playerState, oscillatorType: event.target.name };
  setPlayerState(newState);
};

export const handleDelay1OnOff = (playerState, setPlayerState) => {
  let newState = { ...playerState, delay1On: !playerState.delay1On };
  setPlayerState(newState);
};

export const handleDelay2OnOff = (playerState, setPlayerState) => {
  let newState = { ...playerState, delay2On: !playerState.delay2On };
  setPlayerState(newState);
};

export const handlePitchVibratoOnOff = (playerState, setPlayerState) => {
  let newState = {
    ...playerState,
    pitchVibratoOn: !playerState.pitchVibratoOn,
  };
  setPlayerState(newState);
};
