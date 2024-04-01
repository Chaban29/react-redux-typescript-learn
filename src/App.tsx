import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/rootReducer';
import { CashActions } from './store/cashReducer';
import { CustomerActions } from './store/customerReducer';

export const App = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state: RootState) => state.cash.cash);
  const customers = useSelector(
    (state: RootState) => state.customers.customers
  );

  const showTotalCustomers = () => {
    const totalCustomers = customers.reduce(
      (acc: number, value: number) => acc + value,
      0
    );
    dispatch({
      type: CustomerActions.ADD_CUSTOMER,
      payload: totalCustomers,
    });
  };

  const addCash = (cash: number): void => {
    dispatch({ type: CashActions.ADD_CASH, payload: cash });
  };

  const getCash = (cash: number): void => {
    if (!cash) return;
    dispatch({ type: CashActions.GET_CASH, payload: cash });
  };

  return (
    <div>
      <h1>{cash}</h1>
      <h2>{customers}</h2>
      <div>
        <button onClick={() => addCash(Number(prompt('Add Cash', '0')))}>
          Add cash
        </button>
        <button onClick={() => getCash(Number(prompt('Get Cash', '0')))}>
          Get cash
        </button>
        <button onClick={showTotalCustomers}>Show Total Customers</button>
      </div>
    </div>
  );
};
