import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list.js';

describe ('<GuessList />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessList guesses={[]} />);
	})
});