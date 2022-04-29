import { mount } from '@vue/test-utils';

import MusicBar from '~/components/atoms/MusicBar.vue';

describe('Components:atoms:MusicBar', () => {
	describe('Snapshots', () => {
		it('should render component with correctly props', () => {
			const wrapper = mount(MusicBar, {
				propsData: {
					progressMusicPlayed: 18,
				},
			});

			expect(wrapper.html()).toMatchSnapshot();
		});
	});
});
