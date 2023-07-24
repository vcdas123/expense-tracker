import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
  if (props.items.length === 0)
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;

  return (
    <ul className="expenses-list">
      {props.items.map(exp => (
        <ExpenseItem
          fetchExpenses={props.fetchExpenses}
          key={exp.id}
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
          id={exp.id}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
