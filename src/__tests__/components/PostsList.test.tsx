import PostsList from '../../components/PostsList/PostsList';
import { renderWithProvider } from '../../fixtures/helpers';
import {
  expectEmptyPostsRendered,
  expectPostsRendred,
  expectUserPostsRendered,
} from '../../fixtures/postsListFixtures/helpers';
import { posts, postsStore } from '../../fixtures/postsListFixtures/mocks';

describe('<PostsList />', () => {
  it('should posts list rendered with all right props', () => {
    renderWithProvider(postsStore, <PostsList postsArray={posts} />);

    expectPostsRendred();
  });

  it('should empty posts list rendered', () => {
    const { container } = renderWithProvider(
      postsStore,
      <PostsList postsArray={[]} />
    );

    expectEmptyPostsRendered(container);
  });

  it('should user posts list rendered with all right props', () => {
    const { container } = renderWithProvider(
      postsStore,
      <PostsList postsArray={posts} userPosts />
    );

    expectPostsRendred();
    expectUserPostsRendered(container);
  });
});
