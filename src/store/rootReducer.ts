import { combineReducers } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
