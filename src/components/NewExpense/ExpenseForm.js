import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = props => {
  // @ States
  //~ On each change in the input areas the states will will be managed by the react.
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  //OR
  // When we manage multiple states at once then we must manually update each one and aslo all will be update together.
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  // @ Handlers
  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
    // console.log(event.target.value);
    //OR
    // We must pass object with all the keys otherwise the old state will be replaced by the new one that is react is not going to merge both old and new states.

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    //OR
    // ****This approach of calling the useState function and passing the object to it where new state depends on the previous one is almost correct for many situations but sometimes it dosent provide desired result so we must use the 2nd approach of managing multiple states****
    // More accurate way
    // setUserInput(prevState => {
    //   //This anoynoms function recieve previous state as an argument.
    //   return { ...userInput, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
    // console.log(event.target.value);
    //OR
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    //OR
    // More accurate way
    // setUserInput(prevState => {
    //   //This anoynoms function recieve previous state as an argument.
    //   return { ...userInput, enteredAmount: event.target.value };
    // });
  };
  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
    // console.log(event.target.value);
    //OR
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    //OR
    // More accurate way
    // setUserInput(prevState => {
    //   //This anoynoms function recieve previous state as an argument.
    //   return { ...userInput, enteredDate: event.target.value };
    // });
  };

  const submitHandler = e => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    // @ Two way Binding -
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            required
            // max="2023-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
