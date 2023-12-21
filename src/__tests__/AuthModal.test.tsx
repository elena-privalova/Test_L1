import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react"
import configureStore from 'redux-mock-store'
import { Store } from '@reduxjs/toolkit';
import * as reactRedux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CURRENT_AUTH_TYPE_VALUES } from '../store/modals/types';
import AuthModal from '../components/AuthModal/AuthModal';

const mockUseLocationValue = {
    pathname: "/",
    search: '',
    hash: '',
    state: null
}

interface IReduxProviderProps  {
    children: any;
    reduxStore: Store
}

const ReduxProvider = ({ children, reduxStore }: IReduxProviderProps) => (
    <reactRedux.Provider store={reduxStore}>{children}</reactRedux.Provider>
)

const useSelector = jest.fn();
const useDispatch = jest.fn();
const useLocation = jest.fn();

describe('Test TargetComponent', () => {

    beforeEach(() => {
        useDispatch.mockImplementation(() => () => {});
        useSelector.mockImplementation(selector => selector(mockStore));
        useLocation.mockReturnValue(() => mockUseLocationValue)
    })
    afterEach(() => {
        useDispatch.mockClear();
        useSelector.mockClear();
        useLocation.mockClear();
    })

    const mockStore = configureStore();

    it('render', () => {
        const store = mockStore({
            auth: {
                isAuthLoading: false,
                authUser: null,
                authError: ''
            },
            authModals: {
                isAuthVisible: false,
                currentType: CURRENT_AUTH_TYPE_VALUES.login
            }
    })

        const { container } = render(<BrowserRouter>
        <ReduxProvider reduxStore={store}><AuthModal /></ReduxProvider>
        </BrowserRouter>)

        expect(container.firstChild).toBeNull();
    })

    it('render', () => {
        const store = mockStore({
            auth: {
                isAuthLoading: true,
                authUser: null,
                authError: ''
            },
            authModals: {
                isAuthVisible: true,
                currentType: CURRENT_AUTH_TYPE_VALUES.login
            }
    })

        render(<BrowserRouter>
        <ReduxProvider reduxStore={store}><AuthModal /></ReduxProvider>
        </BrowserRouter>)

        expect(screen.getByText((_, element) => element!.tagName.toLowerCase() === 'circle')).toBeInTheDocument();
    })

    it('render', () => {
        const store = mockStore({
            auth: {
                isAuthLoading: false,
                authUser: null,
                authError: ''
            },
            authModals: {
                isAuthVisible: true,
                currentType: CURRENT_AUTH_TYPE_VALUES.login
            }
    })

        render(<BrowserRouter>
        <ReduxProvider reduxStore={store}><AuthModal /></ReduxProvider>
        </BrowserRouter>)

        expect(screen.getByText(CURRENT_AUTH_TYPE_VALUES.login.toUpperCase())).toBeInTheDocument();
    })

    it('render', () => {
        const store = mockStore({
            auth: {
                isAuthLoading: false,
                authUser: null,
                authError: 'error'
            },
            authModals: {
                isAuthVisible: true,
                currentType: CURRENT_AUTH_TYPE_VALUES.login
            }
    })

        render(<BrowserRouter>
        <ReduxProvider reduxStore={store}><AuthModal /></ReduxProvider>
        </BrowserRouter>)

        expect(screen.getByText("Некорректно введенные данные")).toBeInTheDocument();
    })

    it('render', () => {
        const store = mockStore({
            auth: {
                isAuthLoading: false,
                authUser: null,
                authError: ''
            },
            authModals: {
                isAuthVisible: true,
                currentType: CURRENT_AUTH_TYPE_VALUES.login
            }
    })

        render(<BrowserRouter>
        <ReduxProvider reduxStore={store}><AuthModal /></ReduxProvider>
        </BrowserRouter>)

        expect(screen.getAllByText((_, element) => element!.tagName.toLowerCase() === 'input').length).toBeGreaterThan(0);
    })
});