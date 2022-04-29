import { mount } from '@vue/test-utils';

import Contato from '~/pages/contato/index.vue';

describe('Pages:index', () => {
	let mountConfig;
	beforeEach(() => {
		mountConfig = {
			stubs: {
				Header: true,
				Form: true,
				TitlePage: true,
				Breadcrumb: true,
			},
		};
	});

	describe('Snapshots', () => {
		it('Should render all child componets - pageContato', () => {
			const wrapper = mount(Contato, mountConfig);
			expect(wrapper.html()).toMatchSnapshot();
		});
	});
});
