import AuthModal from '../../components/AuthModal/AuthModal';
import { renderWithProvider } from '../fixtures/helpers';
import {
  authModalLoadingStore,
  authModalHiddenStore,
  authModalSignUpStore,
  authModalErrorStore,
  authModalDefaultStore,
} from '../fixtures/authModalFixtures/mocks';
import {
  expectModalHidden,
  expectDisplayLoader,
  expectSignUpModalOpened,
  expectWarningAlertOpened,
  expectUserAuthorized,
  expectEmailHelperTextShowed,
  expectBothHelperTextShowed,
  expectPasswordHelperTextShowed,
} from '../fixtures/authModalFixtures/helpers';

describe('<AuthModal />', () => {
  it('should be hidden when modal is not active', () => {
    const { container } = renderWithProvider(
      authModalHiddenStore,
      <AuthModal />
    );

    expectModalHidden(container);
  });

  it('should display loader', () => {
    renderWithProvider(
      authModalLoadingStore,
      <AuthModal />
    );

    expectDisplayLoader();
  });

  it('should render sign up modal', () => {
    renderWithProvider(authModalSignUpStore, <AuthModal />);

    expectSignUpModalOpened();
  });

  it('should display alert when user could not authorized', () => {
    renderWithProvider(authModalErrorStore, <AuthModal />);

    expectWarningAlertOpened();
  });

  it('should be closed when user successfully authorized', () => {
    const { container } = renderWithProvider(
      authModalDefaultStore,
      <AuthModal />
    );

    expectUserAuthorized(container);
  });

  it('should display helper text when incorrect email was entered', () => {
    renderWithProvider(
      authModalDefaultStore,
      <AuthModal />
    );

    expectEmailHelperTextShowed();
  });

  it('should display helper text when incorrect password was entered', () => {
    renderWithProvider(
      authModalDefaultStore,
      <AuthModal />
    );

    expectPasswordHelperTextShowed();
  });

  it('should display two helper texts when incorrect email and password were entered', () => {
    renderWithProvider(
      authModalDefaultStore,
      <AuthModal />
    );

    expectBothHelperTextShowed();
  });
});
