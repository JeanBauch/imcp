import { shallowMount } from '@vue/test-utils';

import Footer from '~/components/organisms/Footer.vue';

describe('Components:organisms:Footer', () => {
	const buildWrapper = () => {
		return {
			dataAcessoRapido: [
				{
					name: 'Início',
					link: '/',
				},
			],
		};
	};
	describe('Snapshots', () => {
		it('should render component', () => {
			const config = buildWrapper();
			const wrapper = shallowMount(Footer, config);

			expect(wrapper.html()).toMatchSnapshot();
		});
	});
});
