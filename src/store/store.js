import { createStore } from 'redux';

import reducer from '../reducer/reducer';

// const loggerMiddleware = createLogger();

export const store = createStore(reducer);
