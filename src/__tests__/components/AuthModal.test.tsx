// import '@testing-library/jest-dom';
// import { fireEvent, render, screen } from '@testing-library/react';
// import configureStore from 'redux-mock-store';
// import { Store } from '@reduxjs/toolkit';
// import * as reactRedux from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import { CURRENT_AUTH_TYPE_VALUES } from '../../store/modals/types';
// import AuthModal from '../../components/AuthModal/AuthModal';
// import thunk from 'redux-thunk';

// const mockUseLocationValue = {
//   pathname: '/',
//   search: '',
//   hash: '',
//   state: null,
// };

// interface IReduxProviderProps {
//   children: any;
//   reduxStore: Store;
// }

// const ReduxProvider = ({ children, reduxStore }: IReduxProviderProps) => (
//   <reactRedux.Provider store={reduxStore}>{children}</reactRedux.Provider>
// );

// const useSelector = jest.fn();
// const useDispatch = jest.fn();
// const useLocation = jest.fn();

// describe('Test TargetComponent', () => {
//   beforeEach(() => {
//     useDispatch.mockImplementation(() => () => {});
//     useSelector.mockImplementation(selector => selector(mockStore));
//     useLocation.mockReturnValue(() => mockUseLocationValue);
//   });
//   afterEach(() => {
//     useDispatch.mockClear();
//     useSelector.mockClear();
//     useLocation.mockClear();
//   });

//   const middlewares = [thunk];
//   const mockStore = configureStore(middlewares);

//   it('render', () => {
//     const store = mockStore({
//       auth: {
//         isAuthLoading: false,
//         authUser: null,
//         authError: '',
//       },
//       authModals: {
//         isAuthVisible: false,
//         currentType: CURRENT_AUTH_TYPE_VALUES.login,
//       },
//     });

//     const { container } = render(
//       <BrowserRouter>
//         <ReduxProvider reduxStore={store}>
//           <AuthModal />
//         </ReduxProvider>
//       </BrowserRouter>
//     );

//     expect(container.firstChild).toBeNull();
//   });

//   it('render', () => {
//     const store = mockStore({
//       auth: {
//         isAuthLoading: true,
//         authUser: null,
//         authError: '',
//       },
//       authModals: {
//         isAuthVisible: true,
//         currentType: CURRENT_AUTH_TYPE_VALUES.login,
//       },
//     });

//     render(
//       <BrowserRouter>
//         <ReduxProvider reduxStore={store}>
//           <AuthModal />
//         </ReduxProvider>
//       </BrowserRouter>
//     );

//     expect(
//       screen.getByText(
//         (_, element) => element!.tagName.toLowerCase() === 'circle'
//       )
//     ).toBeInTheDocument();
//   });

//   it('render', () => {
//     const store = mockStore({
//       auth: {
//         isAuthLoading: false,
//         authUser: null,
//         authError: '',
//       },
//       authModals: {
//         isAuthVisible: true,
//         currentType: CURRENT_AUTH_TYPE_VALUES.signup,
//       },
//     });

//     render(
//       <BrowserRouter>
//         <ReduxProvider reduxStore={store}>
//           <AuthModal />
//         </ReduxProvider>
//       </BrowserRouter>
//     );

//     expect(
//       screen.getByText(CURRENT_AUTH_TYPE_VALUES.signup.toUpperCase())
//     ).toBeInTheDocument();
//   });

//   it('render', () => {
//     const store = mockStore({
//       auth: {
//         isAuthLoading: false,
//         authUser: null,
//         authError: 'error',
//       },
//       authModals: {
//         isAuthVisible: true,
//         currentType: CURRENT_AUTH_TYPE_VALUES.login,
//       },
//     });

//     render(
//       <BrowserRouter>
//         <ReduxProvider reduxStore={store}>
//           <AuthModal />
//         </ReduxProvider>
//       </BrowserRouter>
//     );

//     expect(
//       screen.getByText('Некорректно введенные данные')
//     ).toBeInTheDocument();
//   });

//   it('render', () => {
//     const store = mockStore({
//       auth: {
//         isAuthLoading: false,
//         authUser: {},
//         authError: 'error',
//       },
//       authModals: {
//         isAuthVisible: true,
//         currentType: CURRENT_AUTH_TYPE_VALUES.login,
//       },
//     });

//     const { container } = render(
//       <BrowserRouter>
//         <ReduxProvider reduxStore={store}>
//           <AuthModal />
//         </ReduxProvider>
//       </BrowserRouter>
//     );

//     expect(container.firstChild).toBeNull();
//   });

//   it('render', () => {
//     const store = mockStore({
//       auth: {
//         isAuthLoading: false,
//         authUser: null,
//         authError: '',
//       },
//       authModals: {
//         isAuthVisible: true,
//         currentType: CURRENT_AUTH_TYPE_VALUES.login,
//       },
//     });

//     render(
//       <BrowserRouter>
//         <ReduxProvider reduxStore={store}>
//           <AuthModal />
//         </ReduxProvider>
//       </BrowserRouter>
//     );

//     expect(
//       screen.getAllByText(
//         (_, element) => element!.tagName.toLowerCase() === 'input'
//       ).length
//     ).toEqual(2);
//     expect(screen.queryAllByRole('button').length).toEqual(2);
//   });

//   it('render', () => {
//     const store = mockStore({
//       auth: {
//         isAuthLoading: false,
//         authUser: null,
//         authError: '',
//       },
//       authModals: {
//         isAuthVisible: true,
//         currentType: CURRENT_AUTH_TYPE_VALUES.login,
//       },
//     });

//     render(
//       <BrowserRouter>
//         <ReduxProvider reduxStore={store}>
//           <AuthModal />
//         </ReduxProvider>
//       </BrowserRouter>
//     );

//     const [emailInput, passwordInput] = screen.getAllByText(
//       (_, element) => element!.tagName.toLowerCase() === 'input'
//     );
//     const showPasswordBtn = screen.getAllByRole('button')[0];

//     fireEvent.input(emailInput, { target: { value: 'priva@gmail.com' } });
//     fireEvent.input(passwordInput, { target: { value: 'Priva123' } });

//     expect(passwordInput).toHaveAttribute('type', 'password');

//     fireEvent.click(showPasswordBtn);

//     expect(emailInput).toHaveValue('priva@gmail.com');
//     expect(passwordInput).toHaveValue('Priva123');
//     expect(passwordInput).toHaveAttribute('type', 'text');
//   });

//   it('render', () => {
//     const store = mockStore({
//       auth: {
//         isAuthLoading: false,
//         authUser: null,
//         authError: '',
//       },
//       authModals: {
//         isAuthVisible: true,
//         currentType: CURRENT_AUTH_TYPE_VALUES.login,
//       },
//     });

//     const { container } = render(
//       <BrowserRouter>
//         <ReduxProvider reduxStore={store}>
//           <AuthModal />
//         </ReduxProvider>
//       </BrowserRouter>
//     );

//     const [emailInput, passwordInput] = screen.getAllByText(
//       (_, element) => element!.tagName.toLowerCase() === 'input'
//     );
//     const loginBtn = screen.getAllByRole('button')[1];

//     fireEvent.input(emailInput, { target: { value: 'priva@gmail.com' } });

//     expect(loginBtn.className.includes('disabled')).toBeTruthy();

//     fireEvent.input(passwordInput, { target: { value: 'Priva123' } });

//     expect(loginBtn.className.includes('disabled')).toBeFalsy();

//     fireEvent.click(loginBtn);

//     expect(container.firstChild).toBeNull();
//   });

//   it('render', () => {
//     const store = mockStore({
//       auth: {
//         isAuthLoading: false,
//         authUser: null,
//         authError: '',
//       },
//       authModals: {
//         isAuthVisible: true,
//         currentType: CURRENT_AUTH_TYPE_VALUES.login,
//       },
//     });

//     render(
//       <BrowserRouter>
//         <ReduxProvider reduxStore={store}>
//           <AuthModal />
//         </ReduxProvider>
//       </BrowserRouter>
//     );

//     const [emailInput, passwordInput] = screen.getAllByText(
//       (_, element) => element!.tagName.toLowerCase() === 'input'
//     );
//     const loginBtn = screen.getAllByRole('button')[1];

//     fireEvent.input(emailInput, { target: { value: 'priva.com' } });
//     fireEvent.input(passwordInput, { target: { value: 'Priva123' } });
//     fireEvent.focusOut(emailInput);

//     expect(loginBtn.className.includes('disabled')).toBeTruthy();

//     expect(
//       screen.getAllByText(
//         (_, element) => element!.tagName.toLowerCase() === 'p'
//       ).length
//     ).toEqual(2);
//     expect(
//       screen.getAllByText(
//         (_, element) => element!.tagName.toLowerCase() === 'p'
//       )[1].textContent
//     ).toEqual('Email must be correct');
//   });

//   it('render', () => {
//     const store = mockStore({
//       auth: {
//         isAuthLoading: false,
//         authUser: null,
//         authError: '',
//       },
//       authModals: {
//         isAuthVisible: true,
//         currentType: CURRENT_AUTH_TYPE_VALUES.login,
//       },
//     });

//     render(
//       <BrowserRouter>
//         <ReduxProvider reduxStore={store}>
//           <AuthModal />
//         </ReduxProvider>
//       </BrowserRouter>
//     );

//     const [emailInput, passwordInput] = screen.getAllByText(
//       (_, element) => element!.tagName.toLowerCase() === 'input'
//     );
//     const loginBtn = screen.getAllByRole('button')[1];

//     fireEvent.input(emailInput, { target: { value: 'priva@gmail.com' } });
//     fireEvent.input(passwordInput, { target: { value: 'priva123' } });
//     fireEvent.focusOut(passwordInput);

//     expect(loginBtn.className.includes('disabled')).toBeTruthy();

//     expect(
//       screen.getAllByText(
//         (_, element) => element!.tagName.toLowerCase() === 'p'
//       ).length
//     ).toEqual(2);
//     expect(
//       screen.getAllByText(
//         (_, element) => element!.tagName.toLowerCase() === 'p'
//       )[1].textContent
//     ).toEqual('8 symbols, letters in both cases, numbers');
//   });

//   it('render', () => {
//     const store = mockStore({
//       auth: {
//         isAuthLoading: false,
//         authUser: null,
//         authError: '',
//       },
//       authModals: {
//         isAuthVisible: true,
//         currentType: CURRENT_AUTH_TYPE_VALUES.login,
//       },
//     });

//     render(
//       <BrowserRouter>
//         <ReduxProvider reduxStore={store}>
//           <AuthModal />
//         </ReduxProvider>
//       </BrowserRouter>
//     );

//     const [emailInput, passwordInput] = screen.getAllByText(
//       (_, element) => element!.tagName.toLowerCase() === 'input'
//     );
//     const loginBtn = screen.getAllByRole('button')[1];

//     fireEvent.input(emailInput, { target: { value: 'priva.com' } });
//     fireEvent.focusOut(emailInput);
//     expect(
//       screen.getAllByText(
//         (_, element) => element!.tagName.toLowerCase() === 'p'
//       )[1].textContent
//     ).toEqual('Email must be correct');

//     fireEvent.input(passwordInput, { target: { value: 'Priva12' } });
//     fireEvent.focusOut(passwordInput);

//     expect(loginBtn.className.includes('disabled')).toBeTruthy();

//     expect(
//       screen.getAllByText(
//         (_, element) => element!.tagName.toLowerCase() === 'p'
//       ).length
//     ).toEqual(3);
//     expect(
//       screen.getAllByText(
//         (_, element) => element!.tagName.toLowerCase() === 'p'
//       )[2].textContent
//     ).toEqual('8 symbols, letters in both cases, numbers');
//   });
// });
