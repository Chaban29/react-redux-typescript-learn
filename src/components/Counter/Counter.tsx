import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer/rootReducer';
import { CounterActions } from '../../store/counterReducer/counterReducer';

export const Counter: FC = () => {
  const count = useSelector((state: RootState) => state.count.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: CounterActions.INCREMENT, payload: 100 });
  };

  const decrement = () => {
    if (!count) return;
    dispatch({ type: CounterActions.DECREMENT, payload: 10 });
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
