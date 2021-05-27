const initialState = {
  gameData: [],
  gameCount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_GAME': {
      console.log('STATE', state);
      console.log('HELLO', state.gameCount);
      console.log('PAYLOAD', action.payload);
      return {
        ...state,
        gameCount: state.gameCount + 1,
        gameData: [...state.gameData, action.payload],
      };
    }
    case 'PLAYER_ONE_WIN': {
      let arr = [...state.gameData];
      arr[state.gameCount - 1] = { ...arr[state.gameCount - 1] };
      arr[state.gameCount - 1].scoreOne += 1;
      return {
        ...state,
        gameData: arr,
      };
    }
    case 'PLAYER_TWO_WIN': {
      let arr = [...state.gameData];
      arr[state.gameCount - 1] = { ...arr[state.gameCount - 1] };
      arr[state.gameCount - 1].scoreTwo += 1;
      return {
        ...state,
        gameData: arr,
      };
    }

    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};
export default reducer;
