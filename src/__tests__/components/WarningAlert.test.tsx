import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import WarningAlert from '../../components/Error/WarningAlert';

describe('<WarningAlert />', () => {
  it('should render warning alert with all right props', () => {
    render(<WarningAlert text="Некорректно введенные данные" type="error" />);

    expect(
      screen.getByText('Некорректно введенные данные')
    ).toBeInTheDocument();
  });
});
