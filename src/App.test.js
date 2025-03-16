import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import Messagew from './components/Message';

test('should render Hello World text', () => {
  render(<App />);
  const headingElement  = screen.getByText(/Hello World/i);
  expect(headingElement ).toBeInTheDocument();
});



test('should render  welcome component', () => {
  render(<Welcome />);
  const headingElement  = screen.getByText(/cggh/i);
  expect(headingElement ).toBeInTheDocument();
});


test('updates message on Subscribe button click', () => {
  render(<Welcome />);
  const buttonElement = screen.getByText(/Subscribe/i);
  fireEvent.click(buttonElement);
  const updatedMessage = screen.getByText(/helloo i am visiotor/i);
  expect(updatedMessage).toBeInTheDocument();
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


test('should render counter value ', () => {
  render(<Counter value = "0"/>);
  const headingElement = screen.getByText(/counter value 0/i);
  expect(headingElement).toBeInTheDocument();
});


test('should increment counter value by 1', () => {
  render(<Counter />);
  const buttonElement = screen.getByRole('button', { name: /counter/i });
  fireEvent.click(buttonElement);
  const updatedMessage = screen.getByText(/counter value 1/i);
  expect(updatedMessage).toBeInTheDocument();
});


test('should render Welcome visitor text ', () => {
  render(<Message />);
  const headingElement = screen.getByText(/Welcome visitor/i);
  expect(headingElement).toBeInTheDocument();
});

test('should render Thak you for subscribing ', () => {
  render(<Message />);
  const buttonElement = screen.getByRole('button', { name: /Subscribe/i });
  fireEvent.click(buttonElement);
  const headingElement = screen.getByText(/Thak you for subscribing/i);
  expect(headingElement).toBeInTheDocument();
});





