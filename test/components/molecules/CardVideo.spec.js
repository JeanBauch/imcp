import { shallowMount } from '@vue/test-utils';

import CardVideo from '~/components/molecules/CardVideo.vue';

describe('Components:molecules:CardVideo', () => {
	const factory = (values = {}) => {
		return shallowMount(CardVideo, {
			propsData: {
				...values,
			},
		});
	};

	describe('Snapshots', () => {
		it('should render component with correctly props', () => {
			const wrapper = factory({ color: 'orange' });

			expect(wrapper.html()).toMatchSnapshot();
		});

		it('should render correctly data as with props datas', () => {
			const wrapper = factory({ color: 'orange' });

			expect(wrapper.find('.text-primary-orange-500').exists()).toBeTruthy();
		});

		it('should render correctly data with color:orange', async () => {
			const wrapper = factory({ color: 'orange' });

			await wrapper.setData({ themeColors: { textColor: 'text-primary-orange-500' } });

			expect(wrapper.vm.themeColors.textColor).toBe('text-primary-orange-500');
		});

		it('should render correctly data with color:blue', async () => {
			const wrapper = factory({ color: 'blue' });

			await wrapper.setData({ themeColors: { textColor: 'text-secondary-blue-500' } });

			expect(wrapper.vm.themeColors.textColor).toBe('text-secondary-blue-500');
		});
	});
});
