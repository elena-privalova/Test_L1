import { Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

interface IReduxProviderProps {
  children: any;
  reduxStore: Store;
}

export const ReduxProvider = ({
  children,
  reduxStore,
}: IReduxProviderProps) => <Provider store={reduxStore}>{children}</Provider>;

const middlewares = [thunk];
export const mockStore = configureStore(middlewares);
