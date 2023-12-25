import { render } from '@testing-library/react';
import PostsList from '../../../components/PostsList/PostsList';
import { BrowserRouter } from 'react-router-dom';
import { ReduxProvider, mockStore } from '../../helpers/helpers';
import { expectEmptyPostsRendered, expectPostsRendred, expectUserPostsRendered } from './helpers';
import { posts, postsStore } from './mocks';

const mockUseLocationValue = {
  pathname: '/',
  search: '',
  hash: '',
  state: null,
};

const useSelector = jest.fn();
const useDispatch = jest.fn();
const useLocation = jest.fn();

describe('<PostsList />', () => {
  beforeEach(() => {
    useDispatch.mockImplementation(() => () => {});
    useSelector.mockImplementation(selector => selector(mockStore));
    useLocation.mockReturnValue(() => mockUseLocationValue);
  });

  afterEach(() => {
    useDispatch.mockClear();
    useSelector.mockClear();
    useLocation.mockClear();
  });

  it('should posts list rendered with all right props', () => {
    render(
      <BrowserRouter>
        <ReduxProvider reduxStore={postsStore}>
          <PostsList postsArray={posts} />
        </ReduxProvider>
      </BrowserRouter>
    )

    expectPostsRendred();
  })

  it('should empty posts list rendered', () => {
    const { container } = render(
      <BrowserRouter>
        <ReduxProvider reduxStore={postsStore}>
          <PostsList postsArray={[]} />
        </ReduxProvider>
      </BrowserRouter>
    )

    expectEmptyPostsRendered(container);
  })

  it('should user posts list rendered with all right props', () => {
    const { container } = render(
      <BrowserRouter>
        <ReduxProvider reduxStore={postsStore}>
          <PostsList postsArray={posts} userPosts />
        </ReduxProvider>
      </BrowserRouter>)

    expectPostsRendred();
    expectUserPostsRendered(container);
  })
});
