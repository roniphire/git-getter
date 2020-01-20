import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Git Getter', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Git Getter');
  expect(linkElement).toBeInTheDocument();
});
