import '../style/NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseDate = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
       props.onAddExpense(expenseDate)
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData = {onSaveExpenseDataHandler}/>
    </div>
}

export default NewExpense;