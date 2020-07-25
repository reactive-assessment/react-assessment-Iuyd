import React from 'react';
import { render } from '@testing-library/react';
import RelativeDate from './index';

test('should render relative-date', () => {
  const { getByText } = render(<RelativeDate />);
  const labelElement = getByText(/Today:/i);
  expect(labelElement).toBeInTheDocument();
});
