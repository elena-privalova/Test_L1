import React, { PropsWithChildren } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { act, render } from '@testing-library/react';

import { rootReducer } from '../../store/index';

import history from './history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

export const setupMockStore = (preloadedState?: any) => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false }),
    preloadedState,
  });
};

export function renderWithProviders(
  ui: React.ReactElement,
  { initialState = {}, ...renderOptions } = {},
  initialEntries: string[] = []
) {
  const store = setupMockStore(initialState);

  if (initialEntries.length) {
    initialEntries.map(url => {
      history.push(url);
    });
  }

  function Wrapper({ children }: PropsWithChildren<{}>) {
    return (
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export const wait = async (delay: number = 0) => {
  // использование waitFor вызывает ошибку TypeError: MutationObserver is not a constructor
  await act(() => new Promise(res => setTimeout(res, delay)));
};
