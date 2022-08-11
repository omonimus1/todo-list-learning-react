import { render, screen } from '@testing-library/react';
import App from './App';
import user from '@testing-library/user-event';

describe('Test form components rendering ', () => {

  // Mind that it and test are used for the same reasons as in the App.test.js file
  test("Test rendering of todo's form", () => {
    render(<App />); // must be rendered before testing (at any test)
    const linkElement = screen.getByText(/Plan for Today?/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("Test rendering of addTodo button", () => {
    render(<App />);
    const addTodoButton = screen.getByRole('button', { name: /Add Todo/i })
    expect(addTodoButton).toBeInTheDocument();
  });
});

describe('Test todo-list creation', () => {
  test('Todo item creation', () => {
    // render the App component
    render(<App />);
    // add value inside the input field
    user.type(getInputAddTodo(), 'My first to do');
    // emulate click on button 
    user.click(getAddTodobutton());
    // check if the todo item is in the list
    const todoItem = screen.getByText(/My first to do/i);
    // check that todo item is in the list
    expect(todoItem).toBeInTheDocument();
  });
});



describe('Test todo-item update', () => {

});

describe('Test to-do item delete operation', () => {

});


// return the instance to the addTodo button
function getAddTodobutton() {
  return screen.getByRole('button', { name: /Add Todo/i })
}

// Return the input text to create a Todo item
function getInputAddTodo() {
  return screen.getByPlaceholderText(/Add a Todo/i)
}
