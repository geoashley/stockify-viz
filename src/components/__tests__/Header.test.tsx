import React from 'react';
import {render, screen} from '@testing-library/react'
import Header from '../Header';

test('<Header/> snapshot', () => {
  expect(render(<Header />)).toMatchSnapshot();
});

test('renders a div and a button', () => {
  render(<Header />);
  expect(screen.getByText(/stockify/i)).toBeInTheDocument();
  expect(screen.getByText(/login/i)).toBeInTheDocument();
});
