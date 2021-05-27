export function saveGame(payload) {
  return {
    type: 'SAVE_GAME',
    payload: payload,
  };
}
