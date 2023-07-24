import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useExpenseCtx } from '../../store/store';
const NewExpense = () => {
  const {
    formStatus,
    setFormStatus,
    setNewExpenseData,
    INITIAL,
    setEditId,
    setIsEditing,
  } = useExpenseCtx();

  const handler = flag => {
    setNewExpenseData(JSON.parse(JSON.stringify(INITIAL)));
    setFormStatus(flag);
    setEditId(undefined);
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!formStatus ? (
        <button onClick={() => handler(true)} className="fade-in">
          Add New Expense
        </button>
      ) : (
        <ExpenseForm onCancel={() => handler(false)} />
      )}
    </div>
  );
};

export default NewExpense;
