import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PaginationPages from '../components/PaginationPages/PaginationPages';

describe('Pagination pages testing', () => {
  it('testing pagination with all right props', () => {
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

    expect(
      container.getElementsByClassName('post__pagination pagination').length
    ).toBe(countPages);
  });
});
