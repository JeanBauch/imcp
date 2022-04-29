import { shallowMount } from '@vue/test-utils';

import TitlePage from '~/components/atoms/TitlePage.vue';

describe('Components:atoms:ButtonInstrument', () => {
	const factory = (values = {}) => {
		return shallowMount(TitlePage, {
			propsData: {
				...values,
			},
		});
	};
	describe('Snapshots', () => {
		it('should render component with correctly props', () => {
			const wrapper = factory({ title: 'Noticias', titleColor: 'orange', separetorColor: 'yellow' });

			expect(wrapper.html()).toMatchSnapshot();
		});

		it('should render correctly data as with props datas', () => {
			const wrapper = factory({ title: 'Noticias', titleColor: 'orange', separetorColor: 'yellow' });

			expect(wrapper.find('.text-primary-orange-500').exists()).toBeTruthy();
			expect(wrapper.find('.bg-primary-yellow-500').exists()).toBeTruthy();
		});

		it('should render correctly data with color:orange', async () => {
			const wrapper = factory({ title: 'Noticias', titleColor: 'orange', separetorColor: 'yellow' });

			await wrapper.setData({ themeColors: { textColor: 'text-primary-orange-500' } });
			await wrapper.setData({ themeColors: { backgroundSeparetor: 'bg-primary-yellow-500' } });

			expect(wrapper.vm.themeColors.textColor).toBe('text-primary-orange-500');
			expect(wrapper.vm.themeColors.backgroundSeparetor).toBe('bg-primary-yellow-500');
		});

		it('should render correctly data with color:blue', async () => {
			const wrapper = factory({ title: 'Noticias', titleColor: 'blue', separetorColor: 'blue' });

			await wrapper.setData({ themeColors: { textColor: 'text-secondary-blue-500' } });
			await wrapper.setData({ themeColors: { backgroundSeparetor: 'bg-secondary-blue-500' } });

			expect(wrapper.vm.themeColors.textColor).toBe('text-secondary-blue-500');
			expect(wrapper.vm.themeColors.backgroundSeparetor).toBe('bg-secondary-blue-500');
		});
	});
});
