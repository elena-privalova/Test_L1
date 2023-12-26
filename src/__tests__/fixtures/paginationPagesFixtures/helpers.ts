import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { mockPaginationPages } from './mocks';

export const expectPaginationRendered = () => {
  expect(screen.getAllByRole('button').length).toEqual(
    mockPaginationPages.countPages
  );

  expect(screen.getAllByRole('button')[0].textContent).toEqual(
    String(mockPaginationPages.currentPage)
  );
};

export const expectPageSelected = (container: HTMLElement) => {
  fireEvent.click(container.querySelectorAll('button')[1]);

  expect(mockPaginationPages.changePageNumber).toHaveBeenCalledWith(2);
  expect(screen.getAllByRole('button').length).toEqual(
    mockPaginationPages.countPages
  );
};
