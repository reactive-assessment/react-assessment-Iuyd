import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from './index';

test('should render contact-form', () => {
  const { getByText } = render(<ContactForm />);
  const labelElement = getByText(/Contact Us/i);
  expect(labelElement).toBeInTheDocument();
});
