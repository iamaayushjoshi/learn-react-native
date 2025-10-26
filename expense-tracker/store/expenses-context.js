import { act, createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [{ ...action.payload }, ...state];
    case "SET":
      const invered = action.payload.reverse();
      return invered;
    case "UPDATE":
      const updatableExpenceIndex = state.findIndex((expense) => {
        return expense.id === action.payload.id;
      });
      const updatableItem = state[updatableExpenceIndex];
      const updatedItem = {
        ...updatableItem,
        ...action.payload.data,
      };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenceIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.id);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expenseReducer, []);

  function addExpense(expenseData) {
    dispatch({
      type: "ADD",
      payload: expenseData,
    });
  }

  function setExpenses(expenses) {
    dispatch({
      type: "SET",
      payload: expenses,
    });
  }

  function deleteExpense(id) {
    dispatch({
      type: "DELETE",
      id: id,
    });
  }

  function updateExpense(id, expenseData) {
    dispatch({
      type: "UPDATE",
      payload: {
        id: id,
        data: expenseData,
      },
    });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    setExpenses: setExpenses,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };
  return <ExpensesContext value={value}>{children}</ExpensesContext>;
}

export default ExpensesContextProvider;
