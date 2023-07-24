/* eslint-disable no-lone-blocks */

import { useState, useEffect, useCallback } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import useHttp from './hooks/useHttp';

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

  const addExpenseHandler = async expense => {
    const res = await sendReq({
      api: 'addExpense',
      method: 'PUT',
      rawData: [...expenses, expense],
    });
    fetchExpenses();
    console.log('RESPONSE', res);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} fetchExpenses={fetchExpenses} />
    </div>
  );
};

export default App;
