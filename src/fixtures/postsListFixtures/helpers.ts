import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { getFormattedDate } from '../../utils/getFormattedDate';
import { posts } from './mocks';

export const expectPostsRendred = () => {
  posts.forEach(post => {
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

export const expectEmptyPostsRendered = (container: HTMLElement) => {
  expect(container.firstChild).toBeEmptyDOMElement();
};

export const expectUserPostsRendered = (container: HTMLElement) => {
  expect(container.firstChild).toHaveClass('user-posts');
};
