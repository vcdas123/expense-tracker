import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

//@ For all attributes passed to this component only one argument will be passed by react as an object which will contain all the props that is attributes.
//@ If there is no content between opening and closing tag then we can omit the opening tag and can just use its closing tag as a component.

// ! This component function is called four times in expenses.js when we created four expense items and every time a new separate state is created of course in the same way but managed by the react independently.
// ~ So if we change the title for one expense item other expense item will be remain unaffected because they have their own state.That is its on a per component instance basis.So we have separate state even if we create a component more than once.

const ExpenseItem = props => {
  //@ useState Hook takes the initial value of the variable and returns an array containing first element as a variable itself or current state value and the next one is the function which will set the next value of the variable or update the state.
  // const [title, setTitle] = useState(props.title);
  // console.log("Revaluated by react!");
  // let title = props.title;
  //@ Events -
  //~ each events of js exists here and starts with 'on' keyword. so we dont need to add event listener manually like we use to do in regular js.
  //~ 'onClick' is a event prop.

  //! How JSX code get parsed by React ?
  //@ Our components are just regular javascript function except it returns a JSX. Since these are functions someone has to call it , we never call our component function or actually we do unknowingly , actually using our custom components in JSX codes means indirectly we are calling them.

  //@ Once react finished evaluating all the JSX code it translate the code into DOM instructions (because browser dont understant JSX )which later rendered by the browser
  //~ The only problem with this approcah is that react never repeats this (that is it create the DOM only once.)
  //@ But in dynamic apps where we want to update any element in the dom tree we need to revaluate the dom tree again otherwise change will not be reflected in the DOM.
  //~ To achieve this we use STATES which tells the react to evaluate a certain peice of code again.

  // const clickHandler = () => {
  //   // This function needs to change the title once there is an click event on button. But this doesnt work.
  //   // BECAUSE AS OUR COMPONENT GETS EXECUTED FULLY BROWSER CREATES A DOM FOR IT, MOREOVER IT GETS CREATED ONLY ONCE NO MATTER THERE IS A CHANGE IN A JSX CODE AFTER DOM CREATION.
  //   // So thats the main reason title didnt change.
  //   // So to reevaluate the changed component and to make its updated dom we use something called STATES.

  //   // title = "Title Changed!";

  //   setTitle("Updated !");
  //   console.log(title);
  // };
  return (
    <Card className="expense-item">
      {/* All the content will not become the child of Card wrapper component by its own for that we need to use a reserve keyword present in every props parameter called "children." */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        {/* <h2>{title}</h2> */}
        <div className="expense-item__price">Rs {props.amount}</div>
        <button className="expense-delete-btn">
          <i className="fa-solid fa-trash" style={{ color: '#e14747' }} />
        </button>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};
export default ExpenseItem;
