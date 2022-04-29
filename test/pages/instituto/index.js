// import { shallowMount, createLocalVue } from '@vue/test-utils';
// import VueRouter from 'vue-router';

// import Index from '~/pages/instituto/index.vue';

// describe('Pages:instituto:index', () => {
// 	const localVue = createLocalVue();
// 	localVue.use(VueRouter);
// 	const router = new VueRouter();
// 	let mountConfig;

// 	beforeEach(() => {
// 		mountConfig = {
// 			stubs: {
// 				Breadcrumb: true,
// 				TitlePage: true,
// 				CardEventos: true,
// 				CardDescription: true,
// 				Button: true,
// 				CardDepositions: true,
// 				ButtonNavigateInstituto: true,
// 			},
// 			localVue,
// 			router,
// 		};
// 	});

// 	describe('Snapshots', () => {
// 		it('Should render all child componets', () => {
// 			const wrapper = shallowMount(Index, mountConfig);
// 			expect(wrapper.html()).toMatchSnapshot();
// 		});
// 	});
// });
