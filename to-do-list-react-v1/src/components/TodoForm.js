import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  // Set the automatically focused input to the last input value 
  // (so that user does not need to click on the input to edit)
  useEffect(() => {
    inputRef.current.focus();
  });


  const handleChange = e => {
    setInput(e.target.value);
  };


  const handleSubmit = e => {
    e.preventDefault();
    // create a new Todo
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    // set input of the Form to empty string
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder=' todo'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;