import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import WarningAlert from '../components/Error/WarningAlert';

describe('Warning alert testing', () => {
  it('testing alert with right props', () => {
    render(<WarningAlert text="Некорректно введенные данные" type="error" />);

    expect(true).toBeTruthy();
  });
});
