<template>
	<div class="bg-background">
		<section class="container mx-auto px-6 sm:px-9 lg:px-24">
			<div class="flex flex-1 py-3">
				<Breadcrumb :crumbs="crumbs" />
			</div>
			<div class="flex flex-1 items-center justify-center mt-4 md:mt-6">
				<TitlePage :title="'Curso de Aprendizes'" :width="'w-full'" />
			</div>
		</section>
		<main
			class="container mx-auto px-6 sm:px-9 lg:px-24 mt-6 md:mt-8 lg:mt-10 mb-56 flex justify-center"
		>
			<div class="relative">
				<img src="icons/normal-colors/nota-musical(1).svg" alt="" srcset="" class="absolute left-0">
				<iframe
					:class="[tipoFormulario === 'meninas' ? 'block' : 'hidden']"
					src="https://docs.google.com/forms/d/e/1FAIpQLScfqsvWfvCJTLtZCoi8ZDg0rkSFCHlFRsqwtgZV-ReKqYQM5w/viewform?embedded=true"
					width="930"
					height="700"
					frameborder="0"
					marginheight="0"
					marginwidth="0"
				>Carregando…</iframe>

				<iframe
					:class="[tipoFormulario === 'meninos' ? 'block' : 'hidden']"
					src="https://docs.google.com/forms/d/e/1FAIpQLSef67i3J0OXV9Bv63WYKMhT92iP3osniqC1Bz2EvOsgxuC1fQ/viewform?embedded=true"
					width="930"
					height="700"
					frameborder="0"
					marginheight="0"
					marginwidth="0"
				>Carregando…</iframe>
			</div>
		</main>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumb from '~/components/atoms/Breadcrumb.vue';
import TitlePage from '~/components/atoms/TitlePage.vue';

export default Vue.extend({
	components: { Breadcrumb, TitlePage },
	name: 'IndexNoticias',
	data () {
		return {
			crumbs: [
				{
					name: 'Inicio',
					url: '',
				},
				{
					name: 'Escola de Música',
					url: 'escola-de-musica',
				},
				{
					name: 'Curso de Aprendizes',
					url: 'curso-de-aprendizes',
				},
				{
					name: 'Inscrição',
					url: 'inscricao',
				},
			],
			tipoFormulario: this.$route.query.type,
		};
	},
});
</script>
