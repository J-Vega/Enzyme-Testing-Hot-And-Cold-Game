import React from 'react';
import {shallow, mount} from 'enzyme';

import StatusSection from './header.js';

describe ('<StatusSection />', () => {
	it('Renders without crashing', () => {
		shallow(<StatusSection />);
	})
});