import { shallowMount } from '@vue/test-utils';

import CardProfessores from '~/components/molecules/CardProfessores.vue';

describe('Components:molecules:CardProfessores', () => {
	const factory = (values = {}) => {
		return shallowMount(CardProfessores, {
			propsData: {
				...values,
			},
		});
	};

	describe('Snapshots', () => {
		it('should render component with correctly props', () => {
			const wrapper = factory({ color: 'bordo' });

			expect(wrapper.html()).toMatchSnapshot();
		});

		it('should render correctly data as with props datas', () => {
			const wrapper = factory({ color: 'bordo' });

			expect(wrapper.find('.text-primary-bordo-500').exists()).toBeTruthy();
		});

		it('should render correctly data with color:bordo', async () => {
			const wrapper = factory({ color: 'bordo' });

			await wrapper.setData({ themeColors: { textColor: 'text-primary-bordo-500' } });
			await wrapper.setData({ themeColors: { btnColor: 'bg-primary-bordo-500' } });

			expect(wrapper.vm.themeColors.textColor).toBe('text-primary-bordo-500');
			expect(wrapper.vm.themeColors.btnColor).toBe('bg-primary-bordo-500');
		});

		it('should render correctly data with color:blue', async () => {
			const wrapper = factory({ color: 'blue' });

			await wrapper.setData({ themeColors: { textColor: 'text-secondary-blue-500' } });
			await wrapper.setData({ themeColors: { btnColor: 'bg-secondary-blue-500' } });

			expect(wrapper.vm.themeColors.textColor).toBe('text-secondary-blue-500');
			expect(wrapper.vm.themeColors.btnColor).toBe('bg-secondary-blue-500');
		});
	});
});
