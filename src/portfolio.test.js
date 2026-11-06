import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import ReactModal from 'react-modal';
import App from './Home/App';
import Projects from './Projects/Projects';
import { theInfo } from './Projects/projectData';

afterEach(cleanup);

test('mouth toggles and eye listeners are removed when leaving home', () => {
  const remove = jest.spyOn(document, 'removeEventListener');
  const { container, unmount } = render(<MemoryRouter><App /></MemoryRouter>);
  const mouth = screen.getByAltText('Contact and social links');
  expect(mouth).not.toBeVisible();
  fireEvent.click(screen.getByTitle('Toggle mouth'));
  expect(mouth).toBeVisible();
  fireEvent.click(screen.getByTitle('Toggle mouth'));
  expect(mouth).not.toBeVisible();
  fireEvent.mouseMove(document, { clientX: window.innerWidth / 4, clientY: window.innerHeight / 2 });
  expect(container.querySelector('#eyeBall')).toHaveStyle({ left: '25%', top: '50%' });
  unmount();
  expect(remove).toHaveBeenCalledWith('mousemove', expect.any(Function));
  expect(remove).toHaveBeenCalledWith('mouseout', expect.any(Function));
  remove.mockRestore();
});

test('project cards open the matching accessible dialog and close it', () => {
  const host = document.createElement('div');
  document.body.appendChild(host);
  ReactModal.setAppElement(host);
  render(<MemoryRouter><Projects /></MemoryRouter>, { container: host });
  expect(screen.getAllByRole('button')).toHaveLength(Object.keys(theInfo).length);
  const titles = screen.getAllByRole('button').map((card) => card.textContent);
  expect(titles.indexOf('Sub Glasses Holder')).toBeLessThan(titles.indexOf('Custom Curtains'));
  expect(titles.indexOf('Custom Curtains')).toBeLessThan(titles.indexOf('T-Shirt Quilt'));
  expect(titles.indexOf('T-Shirt Quilt')).toBeLessThan(titles.indexOf("Valentine's Day Pottery"));
  // Numeric dates must sort correctly against named months at year boundaries.
  expect(titles.indexOf('Bead Sheet Quilt')).toBeLessThan(titles.indexOf('Potholder'));
  expect(titles.indexOf('Monster Stuffy')).toBeLessThan(titles.indexOf('Makeup Bag'));
  expect(titles.indexOf('PerfBoard Clock')).toBeLessThan(titles.indexOf('Java Tic Tac Toe'));
  for (const entry of Object.values(theInfo)) {
    const card = screen.getByRole('button', { name: `${entry.title} ${entry.title}` });
    const image = card.querySelector('img');
    if (!entry.image.startsWith('http')) {
      expect(image.getAttribute('src')).toMatch(/^\/thumbnails\/.+\.webp$/);
      expect(Number(image.getAttribute('width'))).toBeGreaterThan(0);
      expect(Number(image.getAttribute('height'))).toBeGreaterThan(0);
    }
    fireEvent.click(card);
    const dialog = screen.getByRole('dialog', { name: entry.title });
    expect(dialog).toBeVisible();
    expect(screen.getByRole('heading', { name: entry.title })).toBeVisible();
    const expectedImage = entry.image.startsWith('http') ? entry.image : `/${entry.image}`;
    expect(dialog.querySelector('img')).toHaveAttribute('src', expectedImage);
    if (entry.link) {
      expect(screen.getByRole('link', { name: 'View project' })).toHaveAttribute('href', entry.link);
    } else {
      expect(screen.queryByRole('link', { name: 'View project' })).not.toBeInTheDocument();
    }
    fireEvent.click(screen.getByRole('button', { name: 'close' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  }
});
