import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders App with Latest news', () => {
  const { getByText } = render(<App />);
  expect(getByText('Latest News')).toBeInTheDocument();
});