import { shallowMount } from '@vue/test-utils';

import FloatSmallButton from '~/components/atoms/FloatSmallButton.vue';

describe('Components:atoms:FloatSmallButton', () => {
	describe('Snapshots', () => {
		it('should render component with icon:compartilhar', () => {
			const wrapper = shallowMount(FloatSmallButton, {
				propsData: {
					icon: 'compartilhar',
				},
			});

			expect(wrapper.html()).toMatchSnapshot();
		});
	});
});
