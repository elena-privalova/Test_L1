import { AuthState } from '../../store/auth/types';
import { AuthModalVisibility } from '../../store/modals/types';

interface IAuthModalTestStore {
  auth: AuthState;
  authModals: AuthModalVisibility;
}

export const authModalHiddenStore: IAuthModalTestStore = {
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

export const authModalLoadingStore: IAuthModalTestStore = {
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

export const authModalSignUpStore: IAuthModalTestStore = {
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

export const authModalErrorStore: IAuthModalTestStore = {
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

export const authModalDefaultStore: IAuthModalTestStore = {
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
