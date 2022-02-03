import { render, screen } from '@testing-library/react';
import Guitar from './Guitar';

test.skip('renders', () => {
  render(<Guitar />);
  const linkElement = screen.getByText(/guitar/i);
  expect(linkElement).toBeInTheDocument();
});
