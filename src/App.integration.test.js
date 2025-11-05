import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

beforeEach(() => {
  // silence alerts during tests
  jest.spyOn(window, 'alert').mockImplementation(() => {});
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('full quiz flow: answer questions, click Done, see Results', async () => {
  render(<App />);

  // select correct answers by label text from the JSON
  const hartford = screen.getByLabelText(/Hartford/i);
  const four = screen.getByLabelText(/^4$/i);
  const prime = screen.getByLabelText(/prime/i);

  await userEvent.click(hartford);
  await userEvent.click(four);
  await userEvent.click(prime);

  // click Done
  const done = screen.getByRole('button', { name: /Done/i });
  await userEvent.click(done);

  // Results page should show the expected score
  const resultText = await screen.findByText(/Your score: 3 \/ 3/i);
  expect(resultText).toBeInTheDocument();
});
