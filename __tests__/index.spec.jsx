import React from 'react';
import ReactDOM from 'react-dom';
import ReactTwitterLogin from '../src';

describe('ReactTwitterLogin', () => {
  it('should renders without crashing', () => {
    const component = document.createElement('div');
    ReactDOM.render(<ReactTwitterLogin />, component);
  });
});
