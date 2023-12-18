import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import PaginationPages from '../components/PaginationPages/PaginationPages';

describe('Pagination component', () => {

  it('testing pagination with all right props', () => {
    const countPages = 5;
    const currentPage = 1;
    const changePageNumber = jest.fn();

    render(
      <PaginationPages
        countPages={countPages}
        currentPage={currentPage}
        changePageNumber={changePageNumber}
      />
    );

    expect(
      screen.getAllByRole('button').length
    ).toBe(countPages);
  });

  it('testing click on pages', () => {
    const countPages = 5;
    const currentPage = 1;
    const changePageNumber = jest.fn();

    const { container } = render(
      <PaginationPages
        countPages={countPages}
        currentPage={currentPage}
        changePageNumber={changePageNumber}
      />
    );
    
    fireEvent.click(container.querySelectorAll('button')[1])

    expect(changePageNumber).toHaveBeenCalledWith(2);
  })
});
