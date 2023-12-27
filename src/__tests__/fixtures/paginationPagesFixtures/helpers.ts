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

//???
export const expectPageNumberChanged = () => {
  const pages = screen.getAllByRole('button');

  expect(pages.length).toEqual(mockPaginationPages.countPages);

  fireEvent.click(pages[2]);

  expect(mockPaginationPages.changePageNumber).toHaveBeenCalledWith(3);
};
