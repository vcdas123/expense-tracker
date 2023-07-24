/* eslint-disable no-lone-blocks */

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import MainLoader from './components/Loaders/MainLoader';
import { useExpenseCtx } from './store/store';

const App = () => {
  const { isLoading, expenses, addExpenseHandler } = useExpenseCtx();
  return (
    <>
      <MainLoader isLoading={isLoading} />
      {!isLoading && (
        <div>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses items={expenses} />
        </div>
      )}
    </>
  );
};

export default App;
