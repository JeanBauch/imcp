import { shallowMount } from '@vue/test-utils';

import Button from '~/components/atoms/Button.vue';

describe('Components:atoms:Button', () => {
	const factory = (values = {}) => {
		return shallowMount(Button, {
			propsData: {
				...values,
			},
		});
	};
	describe('Snapshots', () => {
		it('should render component', () => {
			const wrapper = factory({ title: 'Saiba Mais', color: 'blue' });
			expect(wrapper.html()).toMatchSnapshot();
		});

		it('should render correctly data as with props datas', () => {
			const wrapper = factory({ title: 'Saiba Mais', color: 'blue' });

			expect(wrapper.find('.bg-secondary-blue-500').exists()).toBeTruthy();
		});

		it('should render correctly data with color:blue', async () => {
			const wrapper = factory({ title: 'Saiba Mais', color: 'blue' });

			await wrapper.setData({ themeColors: { background: 'bg-secondary-blue-500' } });
			await wrapper.setData({ themeColors: { backgroundOnHover: 'hover:bg-secondary-blue-500' } });

			expect(wrapper.vm.themeColors.background).toBe('bg-secondary-blue-500');
			expect(wrapper.vm.themeColors.backgroundOnHover).toBe('hover:bg-secondary-blue-500');
		});

		it('should render correctly data with color:yellow', async () => {
			const wrapper = factory({ title: 'Saiba Mais', color: 'yellow' });

			await wrapper.setData({ themeColors: { background: 'bg-primary-yellow-500' } });
			await wrapper.setData({ themeColors: { backgroundOnHover: 'hover:bg-primary-yellow-500' } });

			expect(wrapper.vm.themeColors.background).toBe('bg-primary-yellow-500');
			expect(wrapper.vm.themeColors.backgroundOnHover).toBe('hover:bg-primary-yellow-500');
		});
	});
});
