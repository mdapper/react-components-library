import * as React from 'react';
import { render } from '@testing-library/react';

import { Anchor } from './Anchor';

describe('<Anchor />', () => {
  it('renders', () => {
    const { container } = render(<Anchor>Click here</Anchor>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with backgroundColor red', () => {
    const { container } = render(
      <Anchor backgroundColor="red">I'm red</Anchor>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
