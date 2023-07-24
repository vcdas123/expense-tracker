import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = ({ onChangeFilter, selected }) => {
  const currentYear = +new Date().getFullYear();
  const dateOptions = [currentYear, currentYear - 1, currentYear - 2];
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={e => onChangeFilter(e.target.value)}>
          {dateOptions.map(item => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
