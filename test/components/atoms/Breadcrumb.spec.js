import { shallowMount, RouterLinkStub } from '@vue/test-utils';

import Breadcrumb from '~/components/atoms/Breadcrumb.vue';

describe('Components:atoms:Breadcrumb', () => {
	describe('Snapshots', () => {
		it('should render component with props data', () => {
			const wrapper = shallowMount(Breadcrumb, {
				propsData: {
					crumbs: [{
						name: 'Inicio',
						url: '',
					}, {
						name: 'Noticias',
						url: 'noticias',
					}],
				},
				stubs: {
					NuxtLink: RouterLinkStub,
				},
			});

			expect(wrapper.html()).toMatchSnapshot();
		});

		it('should render component without props data', () => {
			const wrapper = shallowMount(Breadcrumb, {
				propsData: {
					crumbs: [],
				},
				stubs: {
					NuxtLink: RouterLinkStub,
				},
			});

			expect(wrapper.html()).toMatchSnapshot();
		});

		it('should coverage default props factory function', () => {
			const wrapper = shallowMount(Breadcrumb, {
				propsData: {
					crumbs: [],
				},
				stubs: {
					NuxtLink: RouterLinkStub,
				},
			});

			expect(wrapper.vm.$options.props.crumbs.default.call()).toEqual([]);
		});
	});
});
