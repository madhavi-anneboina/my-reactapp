import { render, screen } from '@testing-library/react';
import App from './App';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

test('should render Hello World text', () => {
  render(<App />);
  const headingElement  = screen.getByText(/Hello World/i);
  expect(headingElement ).toBeInTheDocument();
});



test('should render Hello I am welcome component text', () => {
  render(<Welcome />);
  const headingElement  = screen.getByText(/Hello I am welcome component/i);
  expect(headingElement ).toBeInTheDocument();
});

test('should render Hello ramana text', () => {
  render(<Greet name="ramana" />);
  const headingElement = screen.getByText(/Hello ramana/i);
  expect(headingElement).toBeInTheDocument();
});

test('should render children text', () => {
  render(
    <Greet name="ramana">
      <p>How are you doing props</p>
    </Greet>
  );
  const paragraphElement = screen.getByText(/How are you doing props/i);
  expect(paragraphElement).toBeInTheDocument();
});





