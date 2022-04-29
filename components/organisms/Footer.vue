<template>
	<footer class="w-full bg-primary-bordo-500 mt-16 xl:mt-28 py-10 relative before:content-[''] before:absolute before:z-20 before:-top-[80px] sm:before:-top-[75px] md:before:-top-[95px] lg:before:-top-[115px] before:left-0 before:w-full before:h-30 md:before:h-36 lg:before:h-40 before:bg-cover xl:before:bg-contain before:bg-bottom before:bg-[url('~/static/complement/ilustra-ondas.svg')]">
		<div class="container mx-auto px-6 sm:px-9 lg:px-24 relative">
			<div class="flex flex-col md:mt-8 xl:mt-12">
				<div class="lg:flex lg:justify-between">
					<div class="lg:w-2/5">
						<div class="flex flex-col gap-6 justify-center sm:justify-start">
							<h3 class="text-white text-2xl 2xl:text-3xl font-semibold">
								Instituto dos Meninos Cantores de <span class="text-primary-yellow-500">Petropólis.</span>
							</h3>
							<div class="w-full h-1 rounded-full bg-primary-bordo-300" />
						</div>
						<div class="flex gap-4 mt-6">
							<div class="w-1/5">
								<img src="logos/IMCP-logo.svg" alt="Logo do Instituto dos Meninos Cantores de Petropólis">
							</div>
							<div class="flex flex-col flex-1">
								<p class="text-white text-sm font-semibold">
									Instituto Meninos Cantores de Petrópolis
								</p>
								<p class="text-white text-sm font-light">
									Telefones: 55 (24) 2104-4100 55
									<br>
									(24) 2104-4141
								</p>
								<p class="text-white text-sm font-light">
									Rua Santos Dumont, 355 - Petrópolis, RJ - Brasil | CEP: 25625-090
								</p>
							</div>
						</div>
						<SocialMidiaFooter />
					</div>
					<div class="flex justify-between lg:gap-8 xl:gap-16 2xl:gap-24">
						<NavbarFooter :title="'Acesso rápido'" :content="dataAcessoRapido" />
						<NavbarFooter :title="'Links importantes'" :content="dataLinksImportantes" class="max-w-[50%] md:max-w-none" />
					</div>
				</div>
				<div>
					<div class="flex flex-col justify-center items-center gap-4 px-4 mt-10">
						<h5 class="text-white text-center text-base font-medium">
							2022 - Instituto dos Meninos Cantores de Petropólis | Todos os direitos reservados.
						</h5>
						<a href="#" class="text-white underline font-light">
							Política de Privacidade
						</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script lang="ts">
import Vue from 'vue';
import NavbarFooter from '../molecules/NavbarFooter.vue';
import SocialMidiaFooter from '../molecules/SocialMidiaFooter.vue';

export default Vue.extend({
	data () {
		return {
			dataAcessoRapido: [
				{
					name: 'Início',
					link: '/',
				},
				{
					name: 'Instituto',
					link: '/',
				},
				{
					name: 'Escola de Música',
					link: '/',
				},
				{
					name: 'Midia',
					link: '/',
				},
				{
					name: 'Noticias',
					link: '/noticias',
				},
				{
					name: 'Agenda',
					link: '/',
				},
				{
					name: 'Contato',
					link: '/contato',
				},
				{
					name: 'Transparência',
					link: '/',
				},
			],
			dataLinksImportantes: [
				{
					name: '80 anos',
					link: '/',
				},
				{
					name: 'Cursos de Aprendizes',
					link: '/',
				},
				{
					name: 'Coral dos Canarinhos',
					link: '/',
				},
				{
					name: 'Coral das Meninas dos Canarinhos',
					link: '/',
				},
				{
					name: 'Orquestra Filarmônica',
					link: '/',
				},
				{
					name: 'Discofrafia',
					link: '/',
				},
			],
		};
	},
	components: { SocialMidiaFooter, NavbarFooter },
});
</script>
