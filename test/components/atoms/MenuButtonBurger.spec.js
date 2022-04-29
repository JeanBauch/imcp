import { shallowMount } from '@vue/test-utils';

import MenuButtonBurguer from '~/components/atoms/MenuButtonBurguer.vue';
// import NavBarMobile from '~/components/molecules/NavbarMobile.vue';

describe('Components:atoms:MenuButtonBurguer', () => {
	let mountConfig;

	beforeEach(() => {
		mountConfig = {
			data () {
				return {
					menuOPen: false,
				};
			},
		}; // Passar aqui o localVue para VueStore e as propsData caso precise
	});

	const buildWrapper = () => {
		// const store = configureStore(); *Caso tenha uma Store futura, preparar os states
		return {
			...mountConfig, // Caso tenha uma store, retornar aqui como \store,\
		};
	};

	describe('Snapshots', () => {
		it('should render component', () => {
			const wrapper = shallowMount(MenuButtonBurguer, {});

			expect(wrapper.html()).toMatchSnapshot();
		});
	});

	describe('Methods', () => {
		it('should create componente with open closed  == { menuOpen:False }', async () => {
			const config = buildWrapper();
			const wrapper = shallowMount(MenuButtonBurguer, config);

			const button = wrapper.find('.menu-btn');

			const handleClickOpenMenu = jest.spyOn(wrapper.vm, 'handleClickOpenMenu');
			await button.trigger('click');

			expect(handleClickOpenMenu).toHaveBeenCalled();
			jest.resetAllMocks();
		});

		it('should create componente with open menu == { menuOpen:True }', async () => {
			const config = buildWrapper();
			const wrapper = shallowMount(MenuButtonBurguer, config);

			await wrapper.setData({ menuOPen: true });

			const button = wrapper.find('.menu-btn');

			const handleClickOpenMenu = jest.spyOn(wrapper.vm, 'handleClickOpenMenu');
			await button.trigger('click');

			expect(handleClickOpenMenu).toHaveBeenCalled();
			jest.resetAllMocks();
		});
	});
});
