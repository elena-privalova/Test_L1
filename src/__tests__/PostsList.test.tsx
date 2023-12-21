import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react"
import { NewsData } from "../components/PostCard/types"
import PostsList from "../components/PostsList/PostsList"
import configureStore from 'redux-mock-store'
import { Store } from '@reduxjs/toolkit';
import * as reactRedux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const data: NewsData[] = [{
    author: {
        avatarPath: "/images/1698064906964-346904561.jpeg",
        createdAt: "2023-10-23T12:35:35.770Z",
        email: "tk.olya@mail.ru",
        firstName: "Olya",
        id: 2399,
        lastName: "T.",
        updatedAt: "2023-10-23T12:41:46.965Z"
    },
    authorId: 2399,
    commentsCount: 1,
    coverPath: "/images/1698064716869-13535312.jpeg",
    createdAt: "2023-10-23T12:38:36.869Z",
    id: 930,
    rating: 4.5,
    tags: [
        {
            createdAt: "2023-10-23T12:38:36.886Z",
            id: 231,
            updatedAt: "2023-10-23T12:38:36.886Z",
            value: "#animals"
        }
    ],
    text: "text text text text text",
    title: "Animals",
    updatedAt: "2023-10-23T12:38:36.869Z"
}
]

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

    const store = mockStore({
            auth: {
                authUser: null
            },
            user: {
                currentUser: null
            },
            newsModal: {
                isNewsVisible: false
            }
        })


    it('render', () => {
        render(<BrowserRouter>
        <ReduxProvider reduxStore={store}><PostsList postsArray={data} /></ReduxProvider>
        </BrowserRouter>)

        expect(screen.getAllByText('Animals').length).toEqual(1)
    })

    it('user posts', () => {
        const { container } = render(<BrowserRouter>
        <ReduxProvider reduxStore={store}><PostsList postsArray={data} userPosts /></ReduxProvider>
        </BrowserRouter>)

        expect(container.firstChild).toHaveClass('user-posts')
    })
});