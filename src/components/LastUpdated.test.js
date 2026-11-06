import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import LastUpdated from './LastUpdated';

const original = process.env.REACT_APP_DEPLOYED_AT;
afterEach(() => {
  cleanup();
  if (original === undefined) delete process.env.REACT_APP_DEPLOYED_AT;
  else process.env.REACT_APP_DEPLOYED_AT = original;
});

test('shows the deployment date in New York time, independent of the visit date', () => {
  process.env.REACT_APP_DEPLOYED_AT = '2026-11-07T02:00:00.000Z';
  render(<LastUpdated />);
  expect(screen.getByText('November 6, 2026')).toHaveAttribute('datetime', '2026-11-07T02:00:00.000Z');
});

test('does not invent a deployment date during local development', () => {
  delete process.env.REACT_APP_DEPLOYED_AT;
  render(<LastUpdated />);
  expect(screen.getByRole('contentinfo')).toHaveTextContent('Last updated: available after deployment');
});
