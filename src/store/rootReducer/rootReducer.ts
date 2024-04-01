import { combineReducers } from 'redux';
import { cashReducer } from '../cashReducer/cashReducer';
import { customerReducer } from '../customerReducer/customerReducer';
import { counterReducer } from '../counterReducer/counterReducer';

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
  count: counterReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
