import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

const container = shallow(<App />);

describe('App component', () => {

  it('Should contain App class', () => {
    expect(container.find('.App').length).to.equal(1);
  });

  it('Should have number set to 1', () => {
    expect(container.find('.number').text()).to.equal("1");
  });
});
