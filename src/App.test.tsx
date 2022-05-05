import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const MockAppComponent = () => {
  return <BrowserRouter>
        <App />
  </BrowserRouter>
}

test('renders learn react link', () => {
  render(<MockAppComponent />);
  const linkElement = screen.getByText(/TDD with React/);
  expect(linkElement).toBeInTheDocument();
});
