import { mount, RouterLinkStub } from '@vue/test-utils';

import Header from '~/components/organisms/Header.vue';

describe('Components:organisms:Header', () => {
	const buildWrapper = () => {
		return {
			stubs: {
				RouterLink: RouterLinkStub,
			},
		};
	};
	describe('Snapshots', () => {
		it('should render component', () => {
			const config = buildWrapper();
			const wrapper = mount(Header, config);

			expect(wrapper.html()).toMatchSnapshot();
		});
	});
});
