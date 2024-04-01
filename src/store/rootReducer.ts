import { combineReducers } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { counterReducer } from './counterReducer';

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
  count: counterReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
