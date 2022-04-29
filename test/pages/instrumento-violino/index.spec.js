import { mount } from '@vue/test-utils';

import Index from '~/pages/instrumento-violino/index.vue';

describe('Pages:instrumento-violino:index', () => {
	let mountConfig;

	beforeEach(() => {
		mountConfig = {
			stubs: {
				Breadcrumb: true,
				TitlePage: true,
				BarCursos: true,
				CardVideo: true,
				Form: true,
				CardDescription: true,
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
