import { AuthState } from '../../../store/auth/types';
import { AuthModalVisibility } from '../../../store/modals/types';

interface IAuthModalMockStore {
  auth: AuthState;
  authModals: AuthModalVisibility;
}

export const authModalHiddenStore: IAuthModalMockStore = {
  auth: {
    isAuthLoading: false,
    authUser: null,
    authError: '',
  },
  authModals: {
    isAuthVisible: false,
    currentType: 'login',
  },
};

export const authModalLoadingStore: IAuthModalMockStore = {
  auth: {
    isAuthLoading: true,
    authUser: null,
    authError: '',
  },
  authModals: {
    isAuthVisible: true,
    currentType: 'login',
  },
};

export const authModalSignUpStore: IAuthModalMockStore = {
  auth: {
    isAuthLoading: false,
    authUser: null,
    authError: '',
  },
  authModals: {
    isAuthVisible: true,
    currentType: 'signup',
  },
};

export const authModalErrorStore: IAuthModalMockStore = {
  auth: {
    isAuthLoading: false,
    authUser: null,
    authError: 'Invalid password or email',
  },
  authModals: {
    isAuthVisible: true,
    currentType: 'login',
  },
};

export const authModalDefaultStore: IAuthModalMockStore = {
  auth: {
    isAuthLoading: false,
    authUser: null,
    authError: '',
  },
  authModals: {
    isAuthVisible: true,
    currentType: 'login',
  },
};
