import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test("Test rendering of todo's form and addTodo button", () => {
  render(<App />);
  const linkElement = screen.getByText(/Plan for Today?/i);
  expect(linkElement).toBeInTheDocument();
});


test("Test rendering of addTodo button", () => {
  render(<App />);
  const addTodoButton = screen.getByRole('button', { name: /Add Todo/i })
  expect(addTodoButton).toBeInTheDocument();
});





