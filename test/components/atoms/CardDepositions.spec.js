import { shallowMount } from '@vue/test-utils';

import CardDepositions from '~/components/atoms/CardDepositions.vue';

describe('Components:atoms:CardDepositions', () => {
	const factory = (values = {}) => {
		return shallowMount(CardDepositions, {
			propsData: {
				...values,
			},
		});
	};
	const propsValues = {
		title: 'ana lúcia freitas',
		subtitle: 'ex-canarinho',
		color: 'orange',
	};

	describe('Snapshots', () => {
		it('should render component with correctly props', () => {
			const wrapper = factory(propsValues);

			expect(wrapper.html()).toMatchSnapshot();
		});

		it('should render correctly data as with props datas', () => {
			const wrapper = factory(propsValues);

			expect(wrapper.find('.border-primary-orange-500').exists()).toBeTruthy();
		});

		it('should render correctly SET data with color:orange', async () => {
			const wrapper = factory(propsValues);

			await wrapper.setData({ themeColors: { borderColor: 'border-primary-orange-500' } });
			await wrapper.setData({ themeColors: { textColor: 'text-primary-orange-500' } });
			await wrapper.setData({ themeColors: { beforeBackground: 'before:bg-primary-orange-500' } });
			await wrapper.setData({ themeColors: { strokeSVG: 'stroke-primary-orange-500' } });
			await wrapper.setData({ themeColors: { groupHoverFillSVG: 'group-hover:fill-primary-orange-700' } });

			expect(wrapper.vm.themeColors.borderColor).toBe('border-primary-orange-500');
			expect(wrapper.vm.themeColors.textColor).toBe('text-primary-orange-500');
			expect(wrapper.vm.themeColors.beforeBackground).toBe('before:bg-primary-orange-500');
			expect(wrapper.vm.themeColors.groupHoverFillSVG).toBe('group-hover:fill-primary-orange-700');
		});

		it('should render correctly SET data with color:blue', async () => {
			const wrapper = factory({ title: 'ana lúcia freitas', subtitle: 'ex-canarinho', color: 'blue' });

			await wrapper.setData({ themeColors: { borderColor: 'border-secondary-blue-500' } });
			await wrapper.setData({ themeColors: { textColor: 'text-secondary-blue-500' } });
			await wrapper.setData({ themeColors: { beforeBackground: 'before:bg-secondary-blue-500' } });
			await wrapper.setData({ themeColors: { strokeSVG: 'stroke-secondary-blue-500' } });
			await wrapper.setData({ themeColors: { groupHoverFillSVG: 'group-hover:fill-secondary-blue-700' } });

			expect(wrapper.vm.themeColors.borderColor).toBe('border-secondary-blue-500');
			expect(wrapper.vm.themeColors.textColor).toBe('text-secondary-blue-500');
			expect(wrapper.vm.themeColors.beforeBackground).toBe('before:bg-secondary-blue-500');
			expect(wrapper.vm.themeColors.groupHoverFillSVG).toBe('group-hover:fill-secondary-blue-700');
		});
	});
});
