<template>
	<div class="bg-background">
		<section class="container mx-auto px-6 sm:px-9 lg:px-24">
			<div class="flex flex-1 py-3">
				<Breadcrumb :crumbs="crumbs" />
			</div>
			<div class="flex flex-1 items-center justify-center mt-4 md:mt-6">
				<TitlePage :title="'Notícias'" />
			</div>
		</section>
		<main class="container mx-auto px-6 sm:px-9 lg:px-24 mt-6 md:mt-8 lg:mt-10 mb-56">
			<div class="flex flex-col justify-center gap-8">
				<div class="flex flex-col md:flex-row items-center md:justify-between rounded-3xl bg-primary-bordo-500 p-8 gap-3">
					<h3 class="text-white text-base font-medium uppercase block md:hidden">
						Filtrar
					</h3>
					<div class="w-full md:w-[70%] xl:w-1/3 flex items-center gap-4">
						<h6 class="text-white text-sm xl:text-base hidden md:block">
							Categorias:
						</h6>
						<div class="w-full border border-white rounded-full px-6 py-3">
							<div class="flex items-center h-5">
								<h5 class="text-white text-sm font-semibold">
									Todos
								</h5>
							</div>
						</div>
					</div>
					<div class="w-full xl:w-5/12 flex items-center gap-4">
						<h6 class="text-white text-xs xl:text-base hidden md:block">
							Buscar por palavra-chave:
						</h6>
						<div class="flex flex-1 border border-white rounded-full px-6 py-3">
							<div class="flex items-center h-5">
								<h5 class="text-white text-xs">
									Ex: Coral das Meninas
								</h5>
							</div>
						</div>
					</div>
				</div>
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 transition-all">
					<CardNoticia class="md:col-span-1 lg:col-span-3" :is-larger="true" />
					<CardNoticia class="md:col-span-1 lg:col-span-3" :is-larger="true" />
					<CardNoticia class="md:col-span-1 lg:col-span-2" />
					<CardNoticia class="md:col-span-1 lg:col-span-2" />
					<CardNoticia class="md:col-span-1 lg:col-span-2" />
					<CardNoticia class="md:col-span-1 lg:col-span-3" :is-larger="true" />
					<CardNoticia class="md:col-span-1 lg:col-span-3" :is-larger="true" />
				</div>
				<div class="flex flex-1 items-center justify-center gap-4 mt-4 text-primary-bordo-500">
					<button>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<button class="bg-primary-bordo-500 w-8 h-8 rounded-full text-white">
						1
					</button>
					<button>2</button>
					<button>3</button>
					<p>...</p>
					<button>10</button>
					<button>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</div>
			</div>
		</main>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumb from '~/components/atoms/Breadcrumb.vue';
import TitlePage from '~/components/atoms/TitlePage.vue';
import CardNoticia from '~/components/molecules/CardNoticia.vue';

export default Vue.extend({
	components: { Breadcrumb, TitlePage, CardNoticia },
	name: 'IndexNoticias',
	data () {
		return {
			crumbs: [{
				name: 'Inicio',
				url: '',
			}, {
				name: 'Noticias',
				url: 'noticias',
			}],
		};
	},
});
</script>
