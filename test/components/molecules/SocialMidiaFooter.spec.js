import { shallowMount } from '@vue/test-utils';

import SocialMidiaFooter from '~/components/molecules/SocialMidiaFooter.vue';

describe('Components:organisms:Footer', () => {
	const buildWrapper = () => {
		return {
		};
	};
	describe('Snapshots', () => {
		it('should render component', () => {
			const config = buildWrapper();
			const wrapper = shallowMount(SocialMidiaFooter, config);

			expect(wrapper.html()).toMatchSnapshot();
		});
	});
});
