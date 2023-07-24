import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = props => {
  const dropDownChangeHandler = e => {
    props.onChangeFilter(e.target.value);
  };
  // Select tag here is recieving value from the parent as well as it passing the value to the parent on change - This is called two way binding.
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
