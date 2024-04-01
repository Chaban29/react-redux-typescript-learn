export interface ICash {
  cash: number;
}

const initialState: ICash = { cash: 0 };

export const enum CashActions {
  ADD_CASH = 'ADD_CASH',
  GET_CASH = 'GET_CASH',
}

export type TypeActions =
  | { type: CashActions.ADD_CASH; payload: number; cash: number }
  | { type: CashActions.GET_CASH; payload: number; cash: number };

export const cashReducer = (state = initialState, action: TypeActions) => {
  switch (action.type) {
    case CashActions.ADD_CASH:
      return { ...state, cash: state.cash + action.payload };
    case CashActions.GET_CASH:
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};
