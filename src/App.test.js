import { render, screen } from '@testing-library/react';
import App from './App';

test('renders quiz heading', () => {
  render(<App />);
  const heading = screen.getByText(/My Questions/i);
  expect(heading).toBeInTheDocument();
});
