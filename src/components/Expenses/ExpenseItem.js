import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React from "react";

const ExpenseItem = (props) => {
  // function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
    // </div>
  );
};

export default ExpenseItem;

// 07 June 2022 10 59 AM EXTRA
// import ExpenseDate from "./ExpenseDate";
// import "./ExpenseItem.css";

// function ExpenseItem(props) {
//   const expenseDate = new Date(2021, 2, 28);
//   const expenseTitle = "Car Insurance";
//   const expenseAmount = 294.68;

// const month = props.date.toLocaleString("en-US", { month: "long" });
// const day = props.date.toLocaleString("en-US", { day: "2-digit" });
// const year = props.date.getFullYear();
// return (
//   <div className="expense-item">
{
  /* <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div> */
}
{
  /* <div>{props.date.toISOString()}</div> */
}
//   <ExpenseDate date={props.date} />
//   <div className="expense-item__description">
//     <h2>{props.title}</h2>
//     <div className="expense-item__price">${props.amount}</div>
//   </div>
// </div>
// <div className="expense-item">
//   <div>{expenseDate.toISOString()}</div>
//   <div className="expense-item__description">
//     <h2>{expenseTitle}</h2>
//     <div className="expense-item__price">${expenseAmount}</div>
//   </div>
// </div>
//   );
// }

// export default ExpenseItem;
