import React from 'react';
import './ExpenseForm.css';
import { useExpenseCtx } from '../../store/store';

const ExpenseForm = ({ onCancel }) => {
  const {
    addExpenseHandler,
    setNewExpenseData,
    newExpenseData,
    isEditing,
    editHandler,
  } = useExpenseCtx();

  const changeHandler = e => {
    setNewExpenseData(prev => {
      let update = JSON.parse(JSON.stringify(prev));
      update[e.target.name] = e.target.value;
      return { ...update };
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    if (isEditing) {
      editHandler(newExpenseData);
      return;
    }

    addExpenseHandler({ ...newExpenseData, id: Date.now() });
  };

  return (
    <form onSubmit={submitHandler} className="fade-in">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={newExpenseData.title}
            onChange={changeHandler}
            required
            placeholder="Title"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={newExpenseData.amount}
            onChange={changeHandler}
            min="0.01"
            step="0.01"
            required
            placeholder="Amount"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={newExpenseData.date}
            onChange={changeHandler}
            min="2019-01-01"
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
