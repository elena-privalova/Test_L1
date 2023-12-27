import DetailCard from '../../components/DetailCard/DetailCard';
import { renderWithProvider } from '../fixtures/helpers';
import { detailCardForAuthUserStore, detailCardForUnauthUserStore, mockDetailCard } from '../fixtures/detailCardFixtures/mocks';
import { expectDetailCardForAuthUserRendered, expectRatingChanged, expectRatingRendered, expectDetailCardForUnauthUserRendered } from '../fixtures/detailCardFixtures/helpers';

describe('<DetailCard />', () => {
  it('should render detail card for unauthorized user', () => {
    renderWithProvider(
        detailCardForUnauthUserStore,
          <DetailCard {...mockDetailCard} />
    );

    expectDetailCardForUnauthUserRendered();
  });

  it('should render detail card for authorized user', () => {
    renderWithProvider(
      detailCardForAuthUserStore,
          <DetailCard {...mockDetailCard} />
    );

    expectDetailCardForAuthUserRendered();
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
