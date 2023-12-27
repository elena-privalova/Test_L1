import { render } from '@testing-library/react';

import PaginationPages from '../../components/PaginationPages/PaginationPages';
import {
  expectPageNumberChanged,
  expectPaginationRendered,
} from '../fixtures/paginationPagesFixtures/helpers';
import { mockPaginationPages } from '../fixtures/paginationPagesFixtures/mocks';

describe('<Pagination />', () => {
  it('should render pagination pages', () => {
    render(
      <PaginationPages
        countPages={mockPaginationPages.countPages}
        currentPage={mockPaginationPages.currentPage}
        changePageNumber={mockPaginationPages.changePageNumber}
      />
    );

    expectPaginationRendered();
  });

  it('should change page number after clicking on selected page', () => {
    render(
      <PaginationPages
        countPages={mockPaginationPages.countPages}
        currentPage={mockPaginationPages.currentPage}
        changePageNumber={mockPaginationPages.changePageNumber}
      />
    );

    expectPageNumberChanged();
  });
});
