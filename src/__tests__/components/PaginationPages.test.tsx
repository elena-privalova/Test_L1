import { render } from '@testing-library/react';

import PaginationPages from '../../components/PaginationPages/PaginationPages';
import {
  expectPageSelected,
  expectPaginationRendered,
} from '../../fixtures/paginationPagesFixtures/helpers';
import { paginationData } from '../../fixtures/paginationPagesFixtures/mocks';

describe('<Pagination />', () => {
  it('should pagination pages rendered with all right props', () => {
    render(
      <PaginationPages
        countPages={paginationData.countPages}
        currentPage={paginationData.currentPage}
        changePageNumber={paginationData.changePageNumber}
      />
    );

    expectPaginationRendered();
  });

  it('should clicking will take to the selected page', () => {
    const { container } = render(
      <PaginationPages
        countPages={paginationData.countPages}
        currentPage={paginationData.currentPage}
        changePageNumber={paginationData.changePageNumber}
      />
    );

    expectPageSelected(container);
  });
});
