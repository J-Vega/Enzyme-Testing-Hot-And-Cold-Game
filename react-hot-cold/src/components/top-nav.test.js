import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './header.js';

describe ('<TopNav />', () => {
	it('Renders without crashing', () => {
		shallow(<TopNav />);
	})
});