import React, {useState} from 'react';

function TodoForm(props){
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents page from reloading
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
        setInput('');
    }

    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input type="text" name='text'
                    placeholder="Add a todo"
                    value={input} 
                    className='todo-input'

                    onChange={handleChange} />
                
                <button className='todo-button' type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoForm;