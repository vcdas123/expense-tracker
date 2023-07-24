import './ExpenseDate.css';

const ExpenseDate = props => {
  const incomingDate = new Date(props?.date);
  const day = incomingDate?.toLocaleString(navigator.language, {
    day: '2-digit',
  });
  const year = incomingDate?.getFullYear();
  const month = incomingDate?.toLocaleString(navigator.language, {
    month: 'long',
  });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
