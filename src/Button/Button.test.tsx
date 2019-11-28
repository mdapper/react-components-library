import * as React from 'react';
import { render } from '@testing-library/react';

import { Button } from './Button';

describe('<Button />', () => {
  it('renders', () => {
    const { container } = render(<Button>Click here</Button>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
