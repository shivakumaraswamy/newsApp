import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from './SearchBar';

it('renders searchbar with search button', () => {
  const { getByText } = render(<SearchBar />);
  expect(getByText('Search')).toBeInTheDocument();
});
