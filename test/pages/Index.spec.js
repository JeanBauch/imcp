import { mount } from '@vue/test-utils';

import Index from '~/pages/index.vue';

describe('Pages:index', () => {
	let mountConfig;

	beforeEach(() => {
		mountConfig = {
			stubs: {
				ButtonInstrument: true,
				Header: true,
				Banner: true,
				CardEventos: true,
				Button: true,
				CardNoticia: true,
				CardMusicPlayer: true,
				Footer: true,
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
