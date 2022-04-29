import { shallowMount } from '@vue/test-utils';

import CardEventos from '~/components/molecules/CardEventos.vue';

describe('Components:organisms:CardEvents', () => {
	const factory = (values = {}) => {
		return shallowMount(CardEventos, {
			propsData: {
				...values,
			},
		});
	};
	describe('Snapshots', () => {
		it('should render component', () => {
			const wrapper = factory({ color: 'bordo' });

			expect(wrapper.html()).toMatchSnapshot();
		});

		it('should render correctly data as with props datas', () => {
			const wrapper = shallowMount(CardEventos, {
				propsData: {
					color: 'bordo',
				},
			});

			expect(wrapper.find('.text-primary-bordo-500').exists()).toBeTruthy();
		});

		it('should render correctly data with bordo or blue', async () => {
			const wrapper = factory({ color: 'blue' });

			await wrapper.setData({ bgColor: 'bg-secondary-blue-500' });

			expect(wrapper.vm.bgColor).toBe('bg-secondary-blue-500');
		});
	});
});
