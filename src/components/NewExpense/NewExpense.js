import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {
  const [isEditing, setIsEditing] = useState(false);
  // ! Child to parent Data communication
  // Here we pass a function(which accepts one argument) from parent to child component as a prop. In child component we call that parent function using an argument, and this argument is recieved by the parent once the function get called by the react. The function must not be called on parent component. The prop will act as a function pointer only in parent component.
  // ! Lifting the state up -
  // It is about moving data from child to some parent component to either use it there or to then pass it down to some other child component. The parent must have access to both the childs involved in this whole transfer.
  const saveExpenseDataHanlder = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHanlder}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
