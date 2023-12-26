import DetailCard from '../../components/DetailCard/DetailCard';
import { renderWithProvider } from '../fixtures/helpers';
import { detailCardForAuthUserStore, detailCardForUnauthUserStore, mockDetailCard } from '../fixtures/detailCardFixtures/mocks';
import { expectAuthDetailCardRendered, expectRatingChanged, expectRatingRendered, expectUnauthDetailCardRendered } from '../fixtures/detailCardFixtures/helpers';

describe('<DetailCard />', () => {
  it('should render detail card for unauthorized user', () => {
    renderWithProvider(
        detailCardForUnauthUserStore,
          <DetailCard {...mockDetailCard} />
    );

    expectUnauthDetailCardRendered();
  });

  it('should render detail card for authorized user', () => {
    renderWithProvider(
      detailCardForAuthUserStore,
          <DetailCard {...mockDetailCard} />
    );

    expectAuthDetailCardRendered();
  });

  it('should have rating rendered after rating button was pressed', () => {
    renderWithProvider(
        detailCardForAuthUserStore,
        <DetailCard {...mockDetailCard} />
    );

    expectRatingRendered();
  });

  it('should change rating after clicking on the rating', () => {
    renderWithProvider(
      detailCardForAuthUserStore,
          <DetailCard {...mockDetailCard} />
    );

    expectRatingChanged();
  });
});
