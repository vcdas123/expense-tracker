import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useExpenseCtx } from '../../store/store';

const ExpenseItem = ({ exp }) => {
  const {
    deleteHandler,
    setNewExpenseData,
    setIsEditing,
    setEditId,
    setFormStatus,
  } = useExpenseCtx();

  return (
    <Card className="expense-item">
      <ExpenseDate date={exp?.date} />
      <div className="expense-item__description">
        <h2>{exp?.title}</h2>

        <div className="btn-container">
          <button
            className="expense-delete-btn"
            onClick={e => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
              });
              setNewExpenseData(exp);
              setEditId(exp?.id);
              setIsEditing(true);
              setFormStatus(true);
            }}
          >
            <i className="fa-solid fa-pen" style={{ color: '#40005d' }} />
          </button>
          <button
            className="expense-delete-btn"
            onClick={deleteHandler.bind(null, exp?.id)}
          >
            <i className="fa-solid fa-trash" style={{ color: '#c92a2a' }} />
          </button>
        </div>
        <div className="expense-item__price">Rs {exp?.amount}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
