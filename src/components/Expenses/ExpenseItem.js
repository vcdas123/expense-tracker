import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useExpenseCtx } from '../../store/store';

const ExpenseItem = ({ date, title, amount, id }) => {
  const { deleteHandler } = useExpenseCtx();

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>

        <div className="expense-item__price">Rs {amount}</div>
        <button
          className="expense-delete-btn"
          onClick={deleteHandler.bind(null, id)}
        >
          <i className="fa-solid fa-trash" style={{ color: '#e14747' }} />
        </button>
      </div>
    </Card>
  );
};
export default ExpenseItem;
