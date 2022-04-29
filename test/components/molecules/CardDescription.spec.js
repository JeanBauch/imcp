import { shallowMount } from '@vue/test-utils';

import CardDescription from '~/components/molecules/CardDescription.vue';

describe('Components:molecules:CardDescription', () => {
	const factory = (values = {}) => {
		return shallowMount(CardDescription, {
			propsData: {
				...values,
			},
		});
	};
	const propsData = {
		bgcolor: 'bordo',
		textcolor: 'bordo',
		complementBorderColor: 'bordo',
	};

	describe('Snapshots', () => {
		it('should render component with correctly props', () => {
			const wrapper = factory(propsData);

			expect(wrapper.html()).toMatchSnapshot();
		});

		it('should render correctly data as with props datas', () => {
			const wrapper = factory({ bgcolor: 'bordo', textcolor: 'bordo' });

			expect(wrapper.find('.bg-primary-bordo-500').exists()).toBeTruthy();
		});

		it('should render correctly data with color:bordo', async () => {
			const wrapper = factory({ bgcolor: 'bordo', textcolor: 'bordo' });

			await wrapper.setData({ themeColors: { background: 'bg-primary-bordo-500' } });
			await wrapper.setData({ themeColors: { textColor: 'text-primary-bordo-500' } });
			await wrapper.setData({ themeColors: { borderColor: 'border-primary-bordo-500' } });
			await wrapper.setData({ themeColors: { buttonColor: 'bordo' } });

			expect(wrapper.vm.themeColors.background).toBe('bg-primary-bordo-500');
			expect(wrapper.vm.themeColors.textColor).toBe('text-primary-bordo-500');
			expect(wrapper.vm.themeColors.borderColor).toBe('border-primary-bordo-500');
			expect(wrapper.vm.themeColors.buttonColor).toBe('bordo');
		});

		it('should render correctly data with color:blue', async () => {
			const wrapper = factory({ bgcolor: 'blue', textcolor: 'blue' });

			await wrapper.setData({ themeColors: { background: 'bg-secondary-blue-500' } });
			await wrapper.setData({ themeColors: { textColor: 'text-secondary-blue-500' } });
			// await wrapper.setData({ themeColors: { backgroundOnHover: 'hover:bg-secondary-blue-500' } });
			// await wrapper.setData({ themeColors: { backgroundPaletSVG: 'fill-secondary-blue-500' } });

			expect(wrapper.vm.themeColors.background).toBe('bg-secondary-blue-500');
			expect(wrapper.vm.themeColors.textColor).toBe('text-secondary-blue-500');
			// expect(wrapper.vm.themeColors.textColor).toBe('text-secondary-blue-500');
			// expect(wrapper.vm.themeColors.backgroundPaletSVG).toBe('fill-secondary-blue-500');
		});
	});
});
