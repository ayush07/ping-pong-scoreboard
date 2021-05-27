export function newGame(payload) {
  return {
    type: 'NEW_GAME',
    payload: payload,
  };
}
