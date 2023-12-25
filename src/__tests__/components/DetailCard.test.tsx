// import '@testing-library/jest-dom';
// import { fireEvent, render, screen } from '@testing-library/react';
// import configureStore from 'redux-mock-store';
// import { Store } from '@reduxjs/toolkit';
// import * as reactRedux from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import thunk from 'redux-thunk';
// import DetailCard from '../../components/DetailCard/DetailCard';
// import { getFormattedDate } from '../../utils/getFormattedDate';

// const data = {
//   id: 109,
//   title: 'Заголовок новости',
//   text: 'Текст новости',
//   coverPath: '/images/1694177642093-995302515.jpeg',
//   authorId: 214,
//   createdAt: '2023-09-08T12:54:02.094Z',
//   updatedAt: '2023-09-08T12:54:02.094Z',
//   rating: 4,
//   commentsCount: 4,
//   author: {
//     id: 214,
//     firstName: null,
//     lastName: null,
//     email: 'o.priva@mail.ru',
//     avatarPath: null,
//     createdAt: '2023-09-05T14:57:07.641Z',
//     updatedAt: '2023-09-05T14:57:07.641Z',
//   },
//   tags: [
//     {
//       id: 62,
//       value: '"tag#1","tag#2"',
//       createdAt: '2023-09-08T12:54:02.108Z',
//       updatedAt: '2023-09-08T12:54:02.108Z',
//     },
//   ],
// };

// const author = {
//   avatarPath: null,
//   createdAt: '2023-12-20T12:36:58.857Z',
//   email: 'm.gavrilova@gmail.com',
//   firstName: null,
//   id: 2504,
//   lastName: null,
//   rating: 0,
//   updatedAt: '2023-12-20T12:36:58.857Z',
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
// const useNavigate = jest.fn();

// describe('Test TargetComponent', () => {
//   beforeEach(() => {
//     useDispatch.mockImplementation(() => () => {});
//     useSelector.mockImplementation(selector => selector(mockStore));
//     useNavigate.mockImplementation(() => () => {});
//   });
//   afterEach(() => {
//     useDispatch.mockClear();
//     useSelector.mockClear();
//     useNavigate.mockClear();
//   });

//   const middlewares = [thunk];
//   const mockStore = configureStore(middlewares);

//   it('render', () => {
//     const store = mockStore({
//       auth: {
//         authUser: null,
//       },
//     });

//     render(
//       <BrowserRouter>
//         <ReduxProvider reduxStore={store}>
//           <DetailCard {...data} />
//         </ReduxProvider>
//       </BrowserRouter>
//     );

//     expect(screen.getByText(data.title)).toBeInTheDocument();
//     expect(screen.getByText(data.text)).toBeInTheDocument();
//     expect(screen.getByText(data.author.email)).toBeInTheDocument();
//     expect(screen.getByText(`Rating: ${data.rating}`)).toBeInTheDocument();
//     data.tags.forEach(tag =>
//       expect(screen.getByText(tag.value)).toBeInTheDocument()
//     );

//     expect(
//       screen.getByText(getFormattedDate(data.createdAt))
//     ).toBeInTheDocument();
//   });

//   it('render', () => {
//     const store = mockStore({
//       auth: {
//         authUser: author,
//       },
//     });

//     render(
//       <BrowserRouter>
//         <ReduxProvider reduxStore={store}>
//           <DetailCard {...data} />
//         </ReduxProvider>
//       </BrowserRouter>
//     );

//     expect(
//       screen.getAllByText(
//         (_, element) => element!.tagName.toLowerCase() === 'div'
//       )[2]
//     ).toHaveClass('detail-card__header--auth');
//     expect(screen.getByRole('button')).toBeInTheDocument();
//   });

//   it('render', () => {
//     const store = mockStore({
//       auth: {
//         authUser: author,
//       },
//     });

//     render(
//       <BrowserRouter>
//         <ReduxProvider reduxStore={store}>
//           <DetailCard {...data} />
//         </ReduxProvider>
//       </BrowserRouter>
//     );

//     const rateBtn = screen.getByRole('button');

//     fireEvent.click(rateBtn);
//     expect(
//       screen
//         .getAllByRole('radio')
//         .filter((item, index) => item.id === `:r${index + 1}:`).length
//     ).toEqual(5);
//   });

//   it('render', () => {
//     const store = mockStore({
//       auth: {
//         authUser: author,
//       },
//     });

//     render(
//       <BrowserRouter>
//         <ReduxProvider reduxStore={store}>
//           <DetailCard {...data} />
//         </ReduxProvider>
//       </BrowserRouter>
//     );

//     const rateBtn = screen.getByRole('button');

//     fireEvent.click(rateBtn);

//     const fourRate = screen
//       .getAllByRole('radio')
//       .find(item => item.id === `:r${4}:`);

//     if (fourRate) {
//       fireEvent.click(fourRate);
//     }

//     expect(screen.queryByDisplayValue(`Rating: 4`));
//   });

//   it('render', () => {
//     const store = mockStore({
//       auth: {
//         authUser: author,
//       },
//     });

//     render(
//       <BrowserRouter>
//         <ReduxProvider reduxStore={store}>
//           <DetailCard {...data} />
//         </ReduxProvider>
//       </BrowserRouter>
//     );

//     const authEmail = screen.getAllByText(
//       (_, element) => element!.tagName.toLowerCase() === 'span'
//     )[1];

//     console.log(authEmail);
//     fireEvent.click(authEmail);

//     expect(useNavigate).toHaveBeenCalledWith('/users/214');
//   });
// });
