import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = props => {
  // ~ Filter year state -
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );
  // ~ Change Filter Year Handler -
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  // ~ Filter Expenses Array According to Selected Year
  const filteredExpenses = props?.items?.filter(expense => {
    // console.log(props?.items);
    const date = new Date(expense?.date);
    return date?.getFullYear()?.toString() === filteredYear;
  });

  // ~ Passed Filtered expense to children
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;

// ~ We can add key attribute to any component and this attribute is important to add for react to load components efficiently.
/* React can render an array containing jsx components. We use {} these braces for writing Js expression within JSX component */
