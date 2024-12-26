import { Route, Routes } from "react-router";
import Expense from "../sections/expense/Expense";
import ExpenseItems from "../sections/expenseItems/ExpenseItem";

const ExpenceRoute = () => {
  return (
    <Routes>
      <Route path="expense" element={<Expense />} />
      <Route path="expense-items" element={<ExpenseItems />} />
    </Routes>
  );
};

export default ExpenceRoute;
