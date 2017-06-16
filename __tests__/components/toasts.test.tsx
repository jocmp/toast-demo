import * as React from 'react';
import Toasts from '../../src/components/toasts';
import { shallow } from 'enzyme';
import { } from 'jest';
import toJson from 'enzyme-to-json'
import { Type } from '../../src/types';

describe('Toast', () => {

  it('renders', () => {
    const toasts: Type.Toast[] = [
      {
        text: "Test message",
        timestamp: 1497617358715
      },
      {
        text: "Message from another index",
        timestamp: 1497617358805
      }
    ];
    const wrapper = shallow(<Toasts toasts={ toasts } hideToast={ jest.fn() } />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});