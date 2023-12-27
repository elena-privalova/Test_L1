import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { mockDetailCard } from './mocks';
import { getFormattedDate } from '../../../utils/getFormattedDate';

export const expectDetailCardForUnauthUserRendered = () => {
  expect(screen.getByText(mockDetailCard.title)).toBeInTheDocument();
  expect(screen.getByText(mockDetailCard.text)).toBeInTheDocument();
  expect(screen.getByText(mockDetailCard.author.email)).toBeInTheDocument();
  expect(
    screen.getByText(`Rating: ${mockDetailCard.rating}`)
  ).toBeInTheDocument();
  mockDetailCard.tags.forEach(tag =>
    expect(screen.getByText(tag.value)).toBeInTheDocument()
  );

  expect(
    screen.getByText(getFormattedDate(mockDetailCard.createdAt))
  ).toBeInTheDocument();
};

export const expectDetailCardForAuthUserRendered = () => {
  expectDetailCardForUnauthUserRendered();

  expect(screen.getAllByRole('generic')[2]).toHaveClass(
    'detail-card__header--auth'
  );
  expect(screen.getByRole('button')).toBeInTheDocument();
};

export const expectRatingRendered = () => {
  const rateBtn = screen.getByRole('button');

  fireEvent.click(rateBtn);

  expect(
    screen
    .getAllByRole('radio').slice(0, -1).length
  ).toEqual(5);
};

export const expectRatingChanged = () => {
  const rateBtn = screen.getByRole('button');

  fireEvent.click(rateBtn);

  fireEvent.click(screen
    .getAllByRole('radio').slice(0, -1)[3]);

  expect(screen.queryByDisplayValue(4)).toBeInTheDocument();
};
