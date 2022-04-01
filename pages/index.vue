<template>
	<div class="bg-background flex flex-col gap-4 md:gap-8">
		<!-- Header/ Banner -->
		<section class="h-screen bg-background md:bg-black relative">
			<Header />
			<Banner />
		</section>
		<!-- Apresentação -->
		<section class="container mx-auto">
			<div class="flex flex-col-reverse lg:flex-row lg:justify-between px-6 sm:px-9 lg:px-24 gap-8 lg:gap-0">
				<div class="flex flex-col items-start justify-center w-full xl:w-4/5 gap-4">
					<h3 class="text-black text-3xl 2xl:text-4xl w-full sm:w-5/6 font-semibold">
						Instituto dos <span class="text-primary-bordo-500">Meninos Cantores de Petropólis</span>
					</h3>
					<p class="text-base">
						O Instituto dos Meninos Cantores de Petrópolis administra a educação de crianças e jovens, dos 8 aos 18 anos de idade, através do Curso de Aprendizes e dos corais Canarinhos de Petrópolis e Meninas dos Canarinhos de Petrópolis.
					</p>
					<Button :title="'Saiba Mais'" :color="'bordo'" class="mt-4" />
				</div>
				<div class="flex w-full lg:justify-end">
					<div class="w-80 xl:w-4/5 h-60 lg:h-60 xl:h-96 2xl:h-[460px] bg-cover bg-center bg-[url('https://www.diariodepetropolis.com.br/Conteudo/Dados_DRPTR14/acervo/1/202010/fotos/0640_x_0427_20201028181244_XMBOJ.jpg')]" style="border-radius: 60% 40% 33% 67% / 36% 51% 49% 64% " />
				</div>
			</div>
		</section>
		<!-- Escola de Música -->
		<section class="container mx-auto my-10">
			<div class="h-full flex flex-col gap-4 px-6 sm:px-9 lg:px-24">
				<h3 class="text-3xl 2xl:text-4xl font-semibold">
					Escola de <span class="text-primary-orange-500">Música</span>
				</h3>
				<ul role="list" class="block md:hidden marker:text-primary-orange-500 list-disc pl-5 space-y-2 font-light">
					<li>Aulas de instrumentos musicais</li>
					<li>Professores renomados</li>
					<li>Teoria musical, solfejo e percepção musical</li>
					<li>Valores franciscanos</li>
				</ul>
				<div class="snap-x flex snap-mandatory overflow-scroll md:overflow-hidden md:snap-none md:grid md:grid-cols-3 md:gap-6 mt-4">
					<ButtonInstrument
						class="snap-center flex-shrink-0 w-5/12 mr-3 md:w-full md:max-h-72 2xl:max-h-fit md:mr-0"
						:title="'Aprendizes'"
						:icon="'passarinho'"
						:color="'yellow'"
					/>
					<ButtonInstrument
						class="snap-center flex-shrink-0 w-5/12 mr-3 md:w-full md:max-h-72 2xl:max-h-fit md:mr-0"
						:title="'piano'"
						:icon="'piano'"
						:color="'orange'"
					/>
					<ButtonInstrument
						class="snap-center flex-shrink-0 w-5/12 mr-3 md:w-full md:max-h-72 2xl:max-h-fit md:mr-0"
						:title="'regência'"
						:icon="'regencia'"
						:color="'bordo'"
					/>
					<ButtonInstrument
						class="snap-center flex-shrink-0 w-5/12 mr-3 md:w-full md:max-h-72 2xl:max-h-fit md:mr-0"
						:title="'violino'"
						:icon="'violino'"
						:color="'beige'"
					/>
					<ButtonInstrument
						class="snap-center flex-shrink-0 w-5/12 mr-3 md:w-full md:max-h-72 2xl:max-h-fit md:mr-0"
						:title="'Violão'"
						:icon="'violao'"
						:color="'blue'"
					/>
					<ButtonInstrument
						class="snap-center flex-shrink-0 w-5/12 mr-3 md:w-full md:max-h-72 2xl:max-h-fit md:mr-0"
						:title="'Órgão'"
						:icon="'orgao'"
						:color="'yellow'"
					/>
				</div>
			</div>
		</section>
		<!-- Agenda -->
		<section class="w-full bg-primary-beige-300 pt-10">
			<div class="container mx-auto px-6 sm:px-9 lg:px-24">
				<div class="w-full mb-6">
					<h3 class="text-2xl 2xl:text-3xl font-light">
						AGENDA
					</h3>
					<h3 class="text-3xl 2xl:text-4xl font-semibold">
						Próximos <span class="text-primary-bordo-500">eventos.</span>
					</h3>
				</div>
				<main class="flex flex-col md:flex-row gap-4 lg:gap-8">
					<CardEventos :color="'bordo'" />
					<CardEventos :color="'blue'" />
				</main>
				<div class="flex justify-center mt-6 lg:mt-8">
					<Button :title="'Ver agenda completa'" :color="'beige'" class="hover:motion-safe:animate-bounce" />
				</div>
			</div>
			<div class="w-full h-20 -mt-4 bg-primary-beige-500 bg-opacity-60 clip-path-waves-mobile rotate-180" />
		</section>
		<!-- Portal de Notícias -->
		<section class="container mx-auto mt-10">
			<div class="flex flex-col gap-8 px-6 sm:px-9 lg:px-24">
				<div>
					<h3 class="text-3xl 2xl:text-4xl font-semibold">
						Portal de <span class="text-secondary-blue-500">Notícias.</span>
					</h3>
				</div>
				<main class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 relative">
					<CardNoticia />
					<CardNoticia />
					<CardNoticia />
				</main>
				<div class="flex justify-center lg:mt-5">
					<Button :title="'Ver tudo'" :color="'yellow'" />
				</div>
			</div>
		</section>
		<!-- Conheça nossas Músicas -->
		<section class="container mx-auto my-6 md:mt-2">
			<div class="flex flex-col gap-5 md:gap-8 px-6 sm:px-9 lg:px-24">
				<div class="flex justify-center sm:justify-start">
					<h3 class="text-3xl 2xl:text-4xl font-semibold">
						Conheça nossas <span class="text-primary-bordo-500">músicas.</span>
					</h3>
				</div>
				<CardMusicPlayer />
			</div>
		</section>
		<!-- Footer -->
		<Footer />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '~/components/atoms/Button.vue';
import ButtonInstrument from '~/components/atoms/ButtonInstrument.vue';
import Banner from '~/components/molecules/Banner.vue';
import CardEventos from '~/components/molecules/CardEventos.vue';
import CardNoticia from '~/components/molecules/CardNoticia.vue';
import CardMusicPlayer from '~/components/organisms/CardMusicPlayer.vue';
import Footer from '~/components/organisms/Footer.vue';
import Header from '~/components/organisms/Header.vue';

export default Vue.extend({
	name: 'IndexPage',
	components: {
		ButtonInstrument,
		Header,
		Banner,
		CardEventos,
		Button,
		CardNoticia,
		CardMusicPlayer,
		Footer,
	},
});
</script>
