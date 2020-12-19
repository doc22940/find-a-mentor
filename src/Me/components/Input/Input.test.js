import { render } from '@testing-library/react';
import React from 'react';
import Input from './';

describe('Input component', () => {
  it('renders properly', () => {
    const { container } = render(
      <Input placeholder="test" value="test" onChange={() => {}} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
