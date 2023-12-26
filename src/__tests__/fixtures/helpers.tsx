import { Provider } from 'react-redux';
import { Store, configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { rootReducer } from '../../store';

interface IReduxProviderProps {
  children: JSX.Element | null;
  reduxStore: Store;
}

export const setupMockStore = (preloadedState?: any) =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false }),
    preloadedState,
  });

export const ReduxProvider = ({
  children,
  reduxStore,
}: IReduxProviderProps) => <Provider store={reduxStore}>{children}</Provider>;

export const renderWithProvider = (
  store: any,
  children: JSX.Element | null
) => {
  const mockStore = setupMockStore(store);

  return render(
    <BrowserRouter>
      <ReduxProvider reduxStore={mockStore}>{children}</ReduxProvider>
    </BrowserRouter>
  );
};
