import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from './feedback.js';

describe ('<Feedback />', () => {
	it('Renders without crashing', () => {
		shallow(<Feedback />);
	})

	it('Renders feedback', () => {
		const TESTFEEDBACK = "Good job!";
		const wrapper = shallow(<Feedback feedback={TESTFEEDBACK} />);

		expect(wrapper.contains(TESTFEEDBACK)).toEqual(true);
	})
});