import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';


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


});

describe('Test todo-item update', () => {

});

describe('Test to-do item delete operation', () => {

});




