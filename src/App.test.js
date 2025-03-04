import { render, screen } from '@testing-library/react';
import App from './App';

test('should render Hello World text', () => {
  render(<App />);
  const headingElement  = screen.getByText(/Hello World/i);
  expect(headingElement ).toBeInTheDocument();
});


