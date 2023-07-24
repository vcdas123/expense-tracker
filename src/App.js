/* eslint-disable no-lone-blocks */
// import ExpenseItem from "./components/ExpenseItem";
// first letter of imported component name must be capital.
// JSX - JavaScript XML(Extensible marekup language) which is basically Js code but seems like html  because we write it like that but behind the scene its get converted into js codes.
// JSX codes are not supported by any browser.
import { useState, useEffect, useCallback } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import useHttp from './hooks/useHttp';

// ! Dumb/Stateless/Presentational Components -
// Are the components which do not maintain any states.
// ! Statefull / Smart Components -
//  Are the components which manage some states.

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Parker Pen',
    amount: 200,
    date: new Date(2022, 10, 1),
  },
  {
    id: 'e6',
    title: 'Boat rockerz',
    amount: 899,
    date: new Date(2022, 1, 18),
  },
  {
    id: 'e7',
    title: 'G19 Microprocessor',
    amount: 4699,
    date: new Date(2022, 6, 12),
  },
  {
    id: 'e8',
    title: 'Team Viewer',
    amount: 10100,
    date: new Date(2022, 2, 12),
  },
  {
    id: 'e8',
    title: 'Cricket Bat',
    amount: 769,
    date: new Date(2023, 0, 1),
  },
  {
    id: 'e9',
    title: 'Earbuds',
    amount: 1689,
    date: new Date(2022, 3, 10),
  },
];

// function App() {
const App = () => {
  const [expenses, setExpenses] = useState([]);
  const { sendReq } = useHttp();

  const fetchExpenses = useCallback(async () => {
    try {
      const res = await sendReq({ api: 'getAllExpenses' });
      console.log('EXPENSES', res);
      if (res) {
        setExpenses(res);
      } else {
        console.log('ERROR FETHCING EXPENSES', res);
      }
    } catch (error) {
      console.log('errpr', error);
      console.log('ERROR FETHCING EXPENSES', error);
    }
  }, [sendReq]);

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  // ~ Handler function passed to child for adding new expense to the above state.
  const addExpenseHandler = async expense => {
    const res = await sendReq({
      api: 'addExpense',
      method: 'PUT',
      rawData: [...expenses, expense],
    });
    fetchExpenses();
    console.log('RESPONSE', res);
  };
  // ! We cant return two sibling component together so always we need to wrap them in a common container component like here NewExpense and Expenses are wrapped in common div component.
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
