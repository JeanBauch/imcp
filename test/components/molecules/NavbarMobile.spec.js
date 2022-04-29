import { shallowMount, RouterLinkStub } from '@vue/test-utils';

import NabbarMobile from '~/components/molecules/NavbarMobile.vue';

describe('Components:molecules:NavbarMobile', () => {
	const factory = (values = {}) => {
		return shallowMount(NabbarMobile, {
			data () {
				return {
					...values,
				};
			},
			stubs: {
				RouterLink: RouterLinkStub,
			},
		});
	};
	const arrayToDataHeader = [
		{
			name: 'Início',
			link: 'index',
		},
		{
			name: 'Instituto',
			link: 'utilites',
		},
		{
			name: 'Escola de Música',
			link: 'utilites',
		},
		{
			name: 'Midia',
			link: 'utilites',
		},
		{
			name: 'Noticias',
			link: 'noticias',
		},
		{
			name: 'Agenda',
			link: 'utilites',
		},
		{
			name: 'Contato',
			link: 'contato',
		},
		{
			name: 'Transparência',
			link: 'utilites',
		},
	];
	describe('Snapshots', () => {
		it('should render component', async () => {
			const wrapper = factory();

			await wrapper.setData({ dataHeader: arrayToDataHeader });

			expect(wrapper.html()).toMatchSnapshot();
		});
	});
});
