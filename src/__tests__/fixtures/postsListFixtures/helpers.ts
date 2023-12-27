import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { getFormattedDate } from '../../../utils/getFormattedDate';
import { mockPosts } from './mocks';

export const expectPostsRendred = () => {
  mockPosts.forEach(post => {
    expect(screen.getByText(post.title)).toBeInTheDocument();
    expect(screen.getByText(post.author.email)).toBeInTheDocument();
    expect(screen.getByText(post.text)).toBeInTheDocument();
    expect(
      screen.getByText(getFormattedDate(post.createdAt))
    ).toBeInTheDocument();

    post.tags.forEach(tag => {
      expect(screen.getByText(tag.value)).toBeInTheDocument();
    });
  });
};

export const expectUserPostsRendered = (container: HTMLElement) => {
  expect(container.firstChild).toHaveClass('user-posts');
};
