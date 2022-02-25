import '../style/ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import { useState } from 'react';




function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Update');
        console.log(title)
    }

    return (
    <Card className='expense-item'>
        <ExpenseDate date= {props.date} />
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            <button onClick={clickHandler}>Ckicked me</button>
        </div>
    </Card>
        
    );
}

export default ExpenseItem;