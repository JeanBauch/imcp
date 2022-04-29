import { mount } from '@vue/test-utils';

import Index from '~/pages/noticias/index.vue';

describe('Pages:index', () => {
	let mountConfig;

	beforeEach(() => {
		mountConfig = {
			stubs: {
				Breadcrumb: true,
				TitlePage: true,
				CardNoticia: true,
			},
		};
	});

	describe('Snapshots', () => {
		it('Should render all child componets', () => {
			const wrapper = mount(Index, mountConfig);
			expect(wrapper.html()).toMatchSnapshot();
		});
	});
});
