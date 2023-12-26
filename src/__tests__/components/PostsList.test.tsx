import PostsList from '../../components/PostsList/PostsList';
import { renderWithProvider } from '../fixtures/helpers';
import {
  expectEmptyPostsRendered,
  expectPostsRendred,
  expectUserPostsRendered,
} from '../fixtures/postsListFixtures/helpers';
import { mockPosts, postsStore } from '../fixtures/postsListFixtures/mocks';

describe('<PostsList />', () => {
  it('should render posts list', () => {
    renderWithProvider(postsStore, <PostsList postsArray={mockPosts} />);

    expectPostsRendred();
  });

  it('should render empty posts list', () => {
    const { container } = renderWithProvider(
      postsStore,
      <PostsList postsArray={[]} />
    );

    expectEmptyPostsRendered(container);
  });

  it('should render posts list with userPosts class', () => {
    const { container } = renderWithProvider(
      postsStore,
      <PostsList postsArray={mockPosts} userPosts />
    );

    expectPostsRendred();
    expectUserPostsRendered(container);
  });
});
