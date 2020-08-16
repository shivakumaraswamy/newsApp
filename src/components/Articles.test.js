import React from 'react'
import { render } from '@testing-library/react'

import Articles from './Articles'

it('Renders new articles', () => {
    const { getByTestId } = render(<Articles />);
    expect(getByTestId('show-articles')).not.toBe(null);

});