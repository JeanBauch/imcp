import { shallowMount } from '@vue/test-utils';

import BarCursos from '~/components/molecules/BarCursos.vue';

describe('Components:organisms:BarCursos', () => {
	describe('Snapshots', () => {
		it('should render component', () => {
			const wrapper = shallowMount(BarCursos, {});

			expect(wrapper.html()).toMatchSnapshot();
		});
	});
});
