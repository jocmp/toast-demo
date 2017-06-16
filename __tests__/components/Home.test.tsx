import * as React from 'react';
import Home from '../../src/components/home';
import { shallow } from 'enzyme';
import { } from 'jest';
import toJson from 'enzyme-to-json'

describe('Home', () => {

    it('renders', () => {
        const wrapper = shallow(<Home showSuccess={ jest.fn() } showError={ jest.fn() } />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    
});