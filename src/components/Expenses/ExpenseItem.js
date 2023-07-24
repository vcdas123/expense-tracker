import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import useHttp from '../../hooks/useHttp';

const ExpenseItem = ({
  date,
  title,
  amount,
  untouchedExpenses,
  id,
  fetchExpenses,
}) => {
  const { sendReq } = useHttp();
  const deleteHandler = async () => {
    const deleteId = untouchedExpenses?.findIndex(item => item?.id === id);
    console.log('delete', deleteId, id);
    console.log(untouchedExpenses);
    const res = await sendReq({
      api: 'deleteExpense',
      params: `${deleteId}.json`,
      method: 'DELETE',
    });
    fetchExpenses();
    console.log(res);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>

        <div className="expense-item__price">Rs {amount}</div>
        <button className="expense-delete-btn" onClick={deleteHandler}>
          <i className="fa-solid fa-trash" style={{ color: '#e14747' }} />
        </button>
      </div>
    </Card>
  );
};
export default ExpenseItem;
