import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { CURRENT_AUTH_TYPE_VALUES } from '../../../store/modals/types';
import { getElementByTagName, getElementsByTagName } from '../../../utils/testHelpers';

export const expectModalHidden = (container: HTMLElement) => {
  expect(container.firstChild).toBeNull();
};

export const expectDisplayLoader = () => {
  expect(getElementByTagName('circle')).toBeInTheDocument();
};

export const expectSignUpModalOpened = () => {
  expect(
    screen.getByText(CURRENT_AUTH_TYPE_VALUES.signup.toUpperCase())
  ).toBeInTheDocument();

  expect(getElementsByTagName('input').length).toEqual(2);
  expect(screen.getAllByRole('button').length).toEqual(2);
};

export const expectWarningAlertOpened = () => {
  expect(screen.getByText('Некорректно введенные данные')).toBeInTheDocument();
};

export const expectUserAuthorized = (container: HTMLElement) => {
  const [emailInput, passwordInput] = getElementsByTagName('input');
  const [showPasswordBtn, loginBtn] = screen.getAllByRole('button');

  fireEvent.input(emailInput, { target: { value: 'priva@gmail.com' } });

  expect(passwordInput).toHaveAttribute('type', 'password');
  expect(loginBtn).toBeDisabled();

  fireEvent.input(passwordInput, { target: { value: 'Priva123' } });
  fireEvent.click(showPasswordBtn);

  expect(passwordInput).toHaveAttribute('type', 'text');
  expect(loginBtn).not.toBeDisabled();

  fireEvent.click(loginBtn);

  expect(container.firstChild).toBeNull();
};

export const expectEmailHelperTextShowed = () => {
  const [emailInput, passwordInput] = getElementsByTagName('input');
  const loginBtn = screen.getAllByRole('button')[1];

  fireEvent.input(emailInput, { target: { value: 'priva.com' } });
  fireEvent.input(passwordInput, { target: { value: 'Priva123' } });
  fireEvent.focusOut(emailInput);

  expect(loginBtn).toBeDisabled();

  expect(getElementsByTagName('p')[1].textContent).toEqual(
    'Email must be correct'
  );
};

export const expectPasswordHelperTextShowed = () => {
  const [emailInput, passwordInput] = getElementsByTagName('input');
  const loginBtn = screen.getAllByRole('button')[1];

  fireEvent.input(emailInput, { target: { value: 'priva.com' } });
  fireEvent.input(passwordInput, { target: { value: 'priva123' } });
  fireEvent.focusOut(passwordInput);

  expect(loginBtn).toBeDisabled();

  expect(getElementsByTagName('p')[1].textContent).toEqual(
    '8 symbols, letters in both cases, numbers'
  );
};

export const expectBothHelperTextShowed = () => {
  const [emailInput, passwordInput] = getElementsByTagName('input');
  const loginBtn = screen.getAllByRole('button')[1];

  fireEvent.input(emailInput, { target: { value: 'priva.com' } });
  fireEvent.focusOut(emailInput);
  fireEvent.input(passwordInput, { target: { value: 'priva123' } });
  fireEvent.focusOut(passwordInput);

  expect(loginBtn).toBeDisabled();

  const helperTexts = getElementsByTagName('p');

  expect(helperTexts[1].textContent).toEqual(
    'Email must be correct'
  );
  expect(helperTexts[2].textContent).toEqual(
    '8 symbols, letters in both cases, numbers'
  );
};
