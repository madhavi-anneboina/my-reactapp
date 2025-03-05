import { render, screen } from '@testing-library/react';
import App from './App';
import Greet from './components/Greet';

test('should render Hello World text', () => {
  render(<App />);
  const headingElement  = screen.getByText(/Hello World/i);
  expect(headingElement ).toBeInTheDocument();
});

test('should render Hello how are you text', () => {
  render(<Greet />);
  const headingElement  = screen.getByText(/Hello how are you/i);
  expect(headingElement ).toBeInTheDocument();
});




