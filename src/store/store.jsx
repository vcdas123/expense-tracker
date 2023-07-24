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
const INITIAL = {
  title: '',
  amount: '',
  date: '',
};

export const ExpenseContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [formStatus, setFormStatus] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [newExpenseData, setNewExpenseData] = useState(
    JSON.parse(JSON.stringify(INITIAL))
  );
  const { sendReq } = useHttp();

  const fetchExpenses = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await sendReq({ api: 'getAllExpenses' });
      console.log('EXPENSES', res);
      if (res !== null) {
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

  const resetter = () => {
    fetchExpenses();
    setEditId(undefined);
    setIsEditing(false);
    setFormStatus(false);
    setNewExpenseData(JSON.parse(JSON.stringify(INITIAL)));
  };

  const addExpenseHandler = async expense => {
    console.log('HEEEE', expense);
    if (isLoading) return;
    setIsLoading(true);
    const res = await sendReq({
      api: 'addExpense',
      method: 'PUT',
      rawData: [...expenses, expense],
    });
    resetter();
    setIsLoading(false);
  };

  const editHandler = async data => {
    if (isLoading) return;

    let update = [...expenses];
    console.log(
      update.findIndex(item => item?.id === editId),
      editId,
      update
    );
    update[update.findIndex(item => item.id === editId)] = data;

    setIsLoading(true);
    const res = await sendReq({
      api: 'editExpense',
      rawData: update,
      method: 'PUT',
    });

    resetter();
    setIsLoading(false);
  };

  const deleteHandler = async id => {
    if (isLoading) return;
    const update = expenses?.filter(item => item?.id !== id);
    console.log(update, 'sfsdfsdf');
    setIsLoading(true);

    const res = await sendReq({
      api: 'deleteExpense',
      rawData: update,
      method: 'PUT',
    });
    resetter();
    setIsLoading(false);
  };

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
        newExpenseData,
        setNewExpenseData,
        isEditing,
        setIsEditing,
        INITIAL,
        editId,
        setEditId,
        editHandler,
        formStatus,
        setFormStatus,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
