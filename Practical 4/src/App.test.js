import { render, screen } from '@testing-library/react';
import App from './App';

test('renders count heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/count:/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/welcome to charusat!!!/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('renders first name input', () => {
  render(<App />);
  const firstNameInput = screen.getByLabelText(/first name/i);
  expect(firstNameInput).toBeInTheDocument();
});

test('renders last name input', () => {
  render(<App />);
  const lastNameInput = screen.getByLabelText(/last name/i);
  expect(lastNameInput).toBeInTheDocument();
});