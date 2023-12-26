import AuthModal from '../../components/AuthModal/AuthModal';
import { renderWithProvider } from '../../fixtures/helpers';
import {
  authModalLoadingStore,
  authModalHiddenStore,
  authModalSignUpStore,
  authModalErrorStore,
  authModalDefaultStore,
} from '../../fixtures/authModalFixtures/mocks';
import {
  expectModalHidden,
  expectSignUpModalOpened,
  expectLoaderInModal,
  expectWarningAlertOpened,
  expectUserAuthorized,
  expectEmailHelperTextShowed,
  expectPasswordHelperTextShowed,
  expectBothHelperTextShowed,
} from '../../fixtures/authModalFixtures/helpers';

describe('<AuthModal />', () => {
  it('render', () => {
    const { container } = renderWithProvider(
      authModalHiddenStore,
      <AuthModal />
    );

    expectModalHidden(container);
  });

  it('render', () => {
    const { container } = renderWithProvider(
      authModalLoadingStore,
      <AuthModal />
    );

    expectLoaderInModal(container);
  });

  it('render', () => {
    renderWithProvider(authModalSignUpStore, <AuthModal />);

    expectSignUpModalOpened();
  });

  it('render', () => {
    renderWithProvider(authModalErrorStore, <AuthModal />);

    expectWarningAlertOpened();
  });

  it('render', () => {
    const { container } = renderWithProvider(
      authModalDefaultStore,
      <AuthModal />
    );

    expectUserAuthorized(container);
  });

  it('render', () => {
    const { container } = renderWithProvider(
      authModalDefaultStore,
      <AuthModal />
    );

    expectEmailHelperTextShowed(container);
  });

  it('render', () => {
    const { container } = renderWithProvider(
      authModalDefaultStore,
      <AuthModal />
    );

    expectPasswordHelperTextShowed(container);
  });

  it('render', () => {
    const { container } = renderWithProvider(
      authModalDefaultStore,
      <AuthModal />
    );

    expectBothHelperTextShowed(container);
  });
});
