import * as React from 'react';
import Toast from '../../src/components/toast';
import { shallow } from 'enzyme';
import { } from 'jest';
import toJson from 'enzyme-to-json'
import { Type } from '../../src/types';

describe('Toast', () => {

  it('renders', () => {
    const toast: Type.Toast = {
      text: "Test message",
      timestamp: 1497617358715
    };
    const wrapper = shallow(<Toast toast={ toast } hideToast={ jest.fn() } />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
});