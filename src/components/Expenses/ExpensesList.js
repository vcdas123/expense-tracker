import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
  if (props.items.length === 0)
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;

  return (
    <ul className="expenses-list">
      {props.items.map((exp, i) => (
        <ExpenseItem key={i} exp={exp} />
      ))}
    </ul>
  );
};
export default ExpensesList;
