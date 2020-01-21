import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Spinner from './Spinner';

enzyme.configure({ adapter: new Adapter() });

describe(Spinner, () => {
  it('should render spinner image', () => {
    const wrapper = shallow(<Spinner />);

    expect(wrapper.find('img').prop('src')).toEqual('spinner.gif');
  });
});
