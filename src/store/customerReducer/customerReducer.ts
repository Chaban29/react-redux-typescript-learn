export const enum CustomerActions {
  ADD_CUSTOMER = 'ADD_CUSTOMER',
  GET_CUSTOMER = 'GET_CUSTOMER',
}

interface ICustomer {
  customers: number[];
}

const defaultState: ICustomer = { customers: [1, 2, 3, 4, 5] };

export type TypeCustomerActions =
  | { type: CustomerActions.ADD_CUSTOMER; payload: number; cash: number }
  | { type: CustomerActions.GET_CUSTOMER; payload: number; cash: number };

export const customerReducer = (
  state = defaultState,
  action: TypeCustomerActions
) => {
  switch (action.type) {
    case CustomerActions.ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case CustomerActions.GET_CUSTOMER:
      return { ...state };
    default:
      return state;
  }
};
