import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import Search from '../Search';

import { searchQuery } from '../../actions/searchActions';
jest.mock('../../actions/searchActions');

test('it should render the correct content', () => {
  const { getByPlaceholderText } = render(<Search />);
  getByPlaceholderText('Search...');
});

test('input change should fire a search action', async () => {
  searchQuery.mockResolvedValue(['APPLE', 'ORANGE', 'WATERMELON']);
  const { getByText, getByPlaceholderText } = render(<Search />);
  const input = getByPlaceholderText('Search...');

  fireEvent.change(input, { target: { value: 'APPL' } });
  expect(searchQuery).toHaveBeenCalledTimes(1);
  await waitFor(() => {
    expect(input.value).toBe('APPL');
    expect(getByText('APPLE')).toBeInTheDocument();
  });
});

test('clearing the input field should remove the search results', async () => {
  searchQuery.mockResolvedValue([]);
  const { getByPlaceholderText } = render(<Search />);
  const input = getByPlaceholderText('Search...');

  fireEvent.change(input, { target: { value: '' } });
  expect(searchQuery).not.toHaveBeenCalled();
  await waitFor(() => {
    expect(input.value).toBe('');
  });
});