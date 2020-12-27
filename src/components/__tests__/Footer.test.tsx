import React from 'react';
import {render, screen} from '@testing-library/react'
import Footer from '../Footer';

test('<Footer /> snapshot', () => {
  expect(render(<Footer />)).toMatchSnapshot();
});

test('renders footer', () => {
  render(<Footer />);
  expect(screen.getByText(/footer/i)).toBeInTheDocument();
});
