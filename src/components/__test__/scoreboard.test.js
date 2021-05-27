import React from 'react';
import ReactDOM from 'react-dom';
import ScoreBoard from '../Scoreboard';
import { store } from '../../store/store';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <ScoreBoard />
    </Provider>,
    div,
  );
});
