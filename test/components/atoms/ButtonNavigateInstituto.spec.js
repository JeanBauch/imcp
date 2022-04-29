import { shallowMount } from '@vue/test-utils';

import ButtonNavigateInstituto from '~/components/atoms/ButtonNavigateInstituto.vue';

describe('Components:atoms:ButtonNavigateInstituto', () => {
	const factory = (values = {}) => {
		return shallowMount(ButtonNavigateInstituto, {
			propsData: {
				...values,
			},
		});
	};
	describe('Snapshots', () => {
		it('should render component with correctly props', () => {
			const wrapper = factory({ title: 'Nossa história', icon: 'nossa-historia', color: 'orange' });

			expect(wrapper.html()).toMatchSnapshot();
		});

		it('should render correctly data as with props datas', () => {
			const wrapper = factory({ title: 'Nossa história', icon: 'nossa-historia', color: 'orange' });

			expect(wrapper.find('.border-primary-orange-500').exists()).toBeTruthy();
		});

		it('should render correctly SET data with color:orange', async () => {
			const wrapper = factory({ title: 'Nossa história', icon: 'nossa-historia', color: 'orange' });

			await wrapper.setData({ themeColors: { borderColor: 'border-primary-orange-500' } });
			await wrapper.setData({ themeColors: { backgroundOnHover: 'hover:bg-primary-orange-50' } });
			await wrapper.setData({ themeColors: { textColor: 'text-primary-orange-500' } });
			await wrapper.setData({ themeColors: { backgroundPaletSVG: 'fill-primary-orange-50' } });

			expect(wrapper.vm.themeColors.borderColor).toBe('border-primary-orange-500');
			expect(wrapper.vm.themeColors.backgroundOnHover).toBe('hover:bg-primary-orange-50');
			expect(wrapper.vm.themeColors.textColor).toBe('text-primary-orange-500');
			expect(wrapper.vm.themeColors.backgroundPaletSVG).toBe('fill-primary-orange-50');
		});

		it('should render correctly SET data with color:blue', async () => {
			const wrapper = factory({ title: 'O instituto', icon: 'instituto-inicial', color: 'blue' });

			await wrapper.setData({ themeColors: { borderColor: 'border-secondary-blue-500' } });
			await wrapper.setData({ themeColors: { backgroundOnHover: 'hover:bg-secondary-blue-50' } });
			await wrapper.setData({ themeColors: { textColor: 'text-secondary-blue-500' } });
			await wrapper.setData({ themeColors: { backgroundPaletSVG: 'fill-secondary-blue-50' } });

			expect(wrapper.vm.themeColors.borderColor).toBe('border-secondary-blue-500');
			expect(wrapper.vm.themeColors.backgroundOnHover).toBe('hover:bg-secondary-blue-50');
			expect(wrapper.vm.themeColors.textColor).toBe('text-secondary-blue-500');
			expect(wrapper.vm.themeColors.backgroundPaletSVG).toBe('fill-secondary-blue-50');
		});
	});
});
