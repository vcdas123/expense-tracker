import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import useHttp from '../hooks/useHttp';

const ExpenseContext = createContext(null);

export const useExpenseCtx = () => useContext(ExpenseContext);

export const ExpenseContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const { sendReq } = useHttp();

  const addExpenseHandler = async expense => {
    const res = await sendReq({
      api: 'addExpense',
      method: 'PUT',
      rawData: [...expenses, expense],
    });
    fetchExpenses();
    console.log('RESPONSE', res);
  };
  const deleteHandler = async id => {
    const update = expenses?.filter(item => item?.id !== id);
    setIsLoading(true);

    const res = await sendReq({
      api: 'deleteExpense',
      rawData: update,
      method: 'PUT',
    });
    fetchExpenses();
    setIsLoading(false);
    console.log(res);
  };
  const fetchExpenses = useCallback(async () => {
    try {
      setIsLoading(true);
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
    setIsLoading(false);
  }, [sendReq]);

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  return (
    <ExpenseContext.Provider
      value={{
        isLoading,
        setIsLoading,
        expenses,
        setExpenses,
        fetchExpenses,
        addExpenseHandler,
        deleteHandler,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
