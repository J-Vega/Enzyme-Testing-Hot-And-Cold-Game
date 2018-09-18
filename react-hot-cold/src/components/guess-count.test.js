import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count.js';

describe ('<GuessCount />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessCount />);
	})

	it('Returns correct amount of guesses', () => {
		const numberOfGuesses  = 3;
		const wrapper = shallow(<GuessCount guessCount={numberOfGuesses}/>);

		expect(wrapper.text()).toEqual(`You've made ${numberOfGuesses} guesses!`);
	})
});