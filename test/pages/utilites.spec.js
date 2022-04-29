import { mount } from '@vue/test-utils';

import Utilites from '~/pages/utilites.vue';

describe('Pages:index', () => {
	let mountConfig;

	beforeEach(() => {
		mountConfig = {};
	});

	describe('Snapshots', () => {
		it('Should render all child componets', () => {
			const wrapper = mount(Utilites, mountConfig);
			expect(wrapper.html()).toMatchSnapshot();
		});
	});
});
