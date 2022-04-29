import { mount } from '@vue/test-utils';

import Index from '~/pages/noticias-detalhes/index.vue';

describe('Pages:noticias-detalhes:index', () => {
	let mountConfig;

	beforeEach(() => {
		mountConfig = {
			stubs: {
				Breadcrumb: true,
				Button: true,
				CardNoticia: true,
				SocialMidiaFooter: true,
				FloatSmallButton: true,
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
