<template>
	<div class="bg-background">
		<section class="container mx-auto px-6 sm:px-9 lg:px-24">
			<div class="flex flex-1 py-3">
				<Breadcrumb :crumbs="crumbs" />
			</div>
			<div class="flex flex-1 items-center justify-center mt-4 md:mt-6">
				<TitlePage :title="themePage === 'blue'? 'Coral dos Meninos dos Canarinhos de Petrópolis':'Coral das Meninas dos Canarinhos de Petrópolis'" :separetor-color="themePage" :width="'xl:w-[70%]'" />
			</div>
		</section>
		<!-- Banner -->
		<section class="flex flex-1 mt-6 md:mt-8 lg:mt-10 bg-primary-bordo-500">
			<img srcset="https://via.placeholder.com/1920x500.webp?text=PlaceholderImageBannerIMCP-CORAL[1920x500]" alt="Banner IMCP-Coral">
		</section>
		<main class="container mx-auto px-6 sm:px-9 lg:px-20 mt-6 md:mt-8 lg:mt-10 mb-6">
			<!-- Sobre -->
			<section class="flex flex-col gap-8 mb-8">
				<div class="flex flex-1 flex-col lg:flex-row p-9 lg:p-14 bg-white border border-primary-beige-300 rounded-3xl gap-6 lg:gap-0 transition-all duration-500">
					<div class="lg:w-[50%] lg:pr-8 xl:pr-18">
						<h4 :class="themePage === 'blue' ? 'text-secondary-blue-500' : 'text-primary-bordo-500' " class="text-4xl font-semibold mb-8">
							Sobre
						</h4>
						<p class="text-sm sm:text-base">
							Fundado em 1988 por Frei José Luiz Prim, o Coral das Meninas dos Canarinhos de Petrópolis é mantido pelo Instituto dos Meninos Cantores de Petrópolis. Atualmente, 56 meninas compõem o coro que tem em seu repertório música sacra, folclórica e popular.
							<br><br>
							Em sua trajetória destaca-se a participação no Projeto Aquarius, cantando a Sinfonia nº 8 “dos MIL” de Mahler; no Tour da Experiência, onde a história de Petrópolis é contada e cantada; e no projeto MPB em Conversa, que fala sobre o ciclo da música popular brasileira, relacionada à história do Brasil. O Coral das Meninas dos Canarinhos também realizou turnês em diversas regiões do país e em Portugal durante as comemorações dos 500 anos do Descobrimento do Brasil, e teve participação em duas faixas na gravação de um CD de MPB, junto com o Coral dos Canarinhos.
						</p>
					</div>
					<div class="lg:w-[50%]">
						<img class="rounded-3xl" src="https://via.placeholder.com/626x457.webp?text=PlaceholderImageSobre[626x457]" alt="Banner IMCP-Sobre">
					</div>
				</div>
				<div class="flex flex-1 flex-col lg:flex-row p-9 lg:p-14 bg-white border border-primary-beige-300 rounded-3xl gap-6 lg:gap-0 transition-all duration-500">
					<div class="lg:w-1/2">
						<img class="rounded-3xl" src="https://via.placeholder.com/626x457.webp?text=PlaceholderImageSobre[626x457]" alt="Banner IMCP-Sobre">
					</div>
					<div class="lg:w-1/2 lg:pl-8 xl:pl-18">
						<p>
							Em 2014, um passo importante para a história do Coral foi dado. Depois de 26 anos de existência, o Coral das Meninas dos Canarinhos de Petrópolis preparam seu primeiro Cd, que contará com três canções inéditas, compostas pelos Maestros Marco Aurélio Lischt, Antônio Gastão e Alexandre Schubert, produzidas especialmente para o disco. A gravação contou com os técnicos Márcio Werderits e Alexandre Rabaço.
							<br><br>
							Durante as quase três décadas de existência, apenas três maestros estiveram à frente do coral: a professora Silvia Muniz, o maestro Gilberto Bittencourt e, desde 1998, o maestro Marcelo Vizani.
							<br><br>
							Coral das Meninas dos Canarinhos de Petrópolis já viajou para Portugal e esteve em diversas regiões do Brasil. As turnês artísticas se tornam fundamentais na formação dessas jovens. Além de levar sua música, as meninas são incentivadas a conhecer a cultura dos locais visitados.
						</p>
					</div>
				</div>
			</section>
			<!-- Regência Musical -->
			<section class="flex flex-col gap-8 p-9 lg:p-14 bg-white border border-primary-beige-300 rounded-3xl transition-all duration-500 mb-8">
				<h2 class="text-4xl font-semibold">
					Regência
					<span :class="themePage === 'blue' ? 'text-secondary-blue-500' : 'text-primary-bordo-500'">
						Depoimentos
					</span>
				</h2>
				<div class="flex flex-1 flex-col xl:flex-row gap-8">
					<div class="flex justify-center w-full xl:w-2/3 h-40 lg:h-56 transition-all duration-300">
						<div class="w-56 md:w-1/3 pr-4 h-full">
							<div class="flex flex-1 bg-gray h-full rounded-3xl" />
						</div>
						<div class="w-1/3 pr-4 h-full hidden md:block">
							<div class="flex flex-1 bg-gray h-full rounded-3xl" />
						</div>
						<div class="w-1/3 pr-4 h-full hidden md:block">
							<div class="flex flex-1 bg-gray h-full rounded-3xl" />
						</div>
					</div>
					<div class="flex flex-col lg:w-full xl:w-1/3 items-center xl:items-start lg:justify-center gap-4 transition-all">
						<h4 class="text-primary-orange-500 text-xl lg:text-2xl font-semibold uppercase xl:w-[80%]">
							MARCO AUŔELIO LISCHT
						</h4>
						<p class="xl:w-[80%] font-light">
							Atualmente é o Diretor Artístico do Coral dos Canarinhos de Petrópolis, da Orquestra Filarmônica de Petrópolis, dos Festivais de Verão dos Canarinhos de Petrópolis, da série Concertos de Órgão na Catedral São Pedro de Alcântara
						</p>
						<Button :title="'conheça'" :color="'orange'" class="lg:mt-4" />
					</div>
				</div>
			</section>
			<!-- Depoimentos -->
			<section class="py-8 flex flex-col gap-8">
				<h2 :class="themePage === 'blue' ? 'text-secondary-blue-500' : 'text-primary-bordo-500'" class="text-4xl font-semibold">
					Depoimentos
				</h2>
				<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7">
					<CardDepositions :title="'ana lúcia freitas'" :subtitle="'ex-canarinho'" :color="themePage" />
					<CardDepositions :title="'ana lúcia freitas'" :subtitle="'ex-canarinho'" :color="themePage" />
					<CardDepositions :title="'ana lúcia freitas'" :subtitle="'ex-canarinho'" :color="themePage" />
				</div>
			</section>
		</main>
		<!-- Carrossel Imagens -->
		<div class="glide w-full py-56 relative">
			<div class="absolute w-full h-full top-0 left-0 bg-center bg-no-repeat bg-[url('~/static/complement/background-carrossel.svg')]" />

			<div class="glide__arrows" data-glide-el="controls">
				<button class="glide__arrow glide__arrow--left" data-glide-dir="<">
					Prev
				</button>
			</div>
			<div class="glide__track" data-glide-el="track">
				<ul class="glide__slides">
					<li class="glide__slide">
						<div class="glide__container">
							<img class="rounded-[30px]" src="https://via.placeholder.com/500x350.webp?text=Fotos-[500x350]" alt="">
						</div>
					</li>
					<li class="glide__slide">
						<div class="glide__container">
							<img class="rounded-[30px]" src="https://via.placeholder.com/500x350.webp?text=Fotos-[500x350]" alt="">
						</div>
					</li>
					<li class="glide__slide">
						<div class="glide__container">
							<img class="rounded-[30px]" src="https://via.placeholder.com/500x350.webp?text=Fotos-[500x350]" alt="">
						</div>
					</li>
					<li class="glide__slide">
						<div class="glide__container">
							<img class="rounded-[30px]" src="https://via.placeholder.com/500x350.webp?text=Fotos-[500x350]" alt="">
						</div>
					</li>
					<li class="glide__slide">
						<div class="glide__container">
							<img class="rounded-[30px]" src="https://via.placeholder.com/500x350.webp?text=Fotos-[500x350]" alt="">
						</div>
					</li>
					<li class="glide__slide">
						<div class="glide__container">
							<img class="rounded-[30px]" src="https://via.placeholder.com/500x350.webp?text=Fotos-[500x350]" alt="">
						</div>
					</li>
				</ul>
			</div>
			<div class="glide__bullets" data-glide-el="controls[nav]">
				<button class="glide__bullet" data-glide-dir="=0" />
				<button class="glide__bullet" data-glide-dir="=1" />
				<button class="glide__bullet" data-glide-dir="=2" />
			</div>
			<div class="glide__arrows" data-glide-el="controls">
				<button class="glide__arrow glide__arrow--right" data-glide-dir=">">
					Next
				</button>
			</div>
		</div>
		<!-- Agenda -->
		<section class="container mx-auto px-6 sm:px-9 lg:px-20 mt-6 md:mt-8 lg:mt-10">
			<section class="flex flex-1 flex-col">
				<div class="w-full mb-10">
					<h3 class="text-3xl 2xl:text-4xl font-semibold">
						Próximos <span :class="themePage === 'blue' ? 'text-secondary-blue-500' : 'text-primary-bordo-500'">eventos.</span>
					</h3>
				</div>
				<div class="flex flex-col xl:flex-row items-center justify-between gap-8 lg:gap-8 xl:gap-0 mb-16">
					<div class="xl:w-1/2">
						<div class="flex flex-col md:flex-row xl:flex-col gap-4 lg:gap-8">
							<CardEventos :color="themePage" class="xl:w-[90%]" />
							<CardEventos :color="themePage" class="xl:w-[90%]" />
						</div>
						<div class="flex justify-center mt-6 lg:mt-8 xl:w-[90%]">
							<Button :title="'Ver todos'" :color="'orange'" />
						</div>
					</div>
					<div>
						<CardDescription :textcolor="themePage === 'blue' ? 'orange' : 'yellow'" :bgcolor="themePage" :complement-border-color="themePage" :is-next-event="true" />
					</div>
				</div>
			</section>
		</section>
		<!-- Navegar para outra subtelas do Instituto -->
		<section class="flex flex-1 flex-col items-center md:container pl-6 sm:pl-9 md:px-9 md:mx-auto xl:px-32 2xl:px-48 mb-56">
			<div class="flex flex-1 justify-center items-center mb-10">
				<h3 class="text-3xl 2xl:text-4xl font-semibold text-center">
					O instituto
					<span v-if="themePage === 'blue'" class="text-secondary-blue-500"> dos Meninos Cantores</span>
					<span v-else class="text-primary-bordo-500">das Meninas Cantoras</span>
					de <span :class="themePage === 'blue' ? 'text-secondary-blue-500':'text-primary-bordo-500'">Petrópolis</span>
				</h3>
			</div>
			<div class="snap-x flex snap-mandatory overflow-scroll md:overflow-hidden md:snap-none md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-4 xl:gap-6 w-full transition-all">
				<ButtonNavigateInstituto :title="'O instituto'" :icon="'instituto-inicial'" :color="'blue'" class="snap-center flex-shrink-0 w-5/12 mr-3 md:w-full md:mr-0" />
				<ButtonNavigateInstituto :title="'Nossa história'" :icon="'nossa-historia'" :color="'orange'" class="snap-center flex-shrink-0 w-5/12 mr-3 md:w-full md:mr-0" />
				<ButtonNavigateInstituto :title="'Coral dos Carinhos'" :icon="'coral-meninos'" :color="'orange'" class="snap-center flex-shrink-0 w-5/12 mr-3 md:w-full md:mr-0" />
				<ButtonNavigateInstituto :title="'Orquestra Filarmônica'" :icon="'orquestra'" :color="'orange'" class="snap-center flex-shrink-0 w-5/12 mr-3 md:w-full md:mr-0" />
				<ButtonNavigateInstituto :title="'Professores (musicistas)'" :icon="'professores'" :color="'orange'" class="snap-center flex-shrink-0 w-5/12 mr-3 md:w-full md:mr-0" />
			</div>
		</section>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Glide from '@glidejs/glide';

import Breadcrumb from '~/components/atoms/Breadcrumb.vue';
import TitlePage from '~/components/atoms/TitlePage.vue';
import CardEventos from '~/components/molecules/CardEventos.vue';
import CardDescription from '~/components/molecules/CardDescription.vue';
import Button from '~/components/atoms/Button.vue';
import CardDepositions from '~/components/atoms/CardDepositions.vue';
import ButtonNavigateInstituto from '~/components/atoms/ButtonNavigateInstituto.vue';

let glide:any;

export default Vue.extend({
	components: { Breadcrumb, TitlePage, CardEventos, CardDescription, Button, CardDepositions, ButtonNavigateInstituto },
	name: 'IndexInstituto',
	data () {
		return {
			crumbs: [{
				name: 'Inicio',
				url: '',
			}, {
				name: 'Instituto',
				url: 'instituto',
			}, {
				name: 'Coral dos Canarinhos de Petrópolis',
				url: 'instituto',
			}],
			themePage: this.$route.query.type === 'meninos' ? 'blue' : 'bordo',
		};
	},
	mounted () {
		glide = new Glide('.glide', {
			perView: 3.5,
			focusAt: 'center',
			startAt: 3,
			gap: 48,
			breakpoints: {
				1024: {
					perView: 2.5,
					startAt: 2,
				},
				768: {
					perView: 1.5,
					startAt: 1,
				},
				576: {
					perView: 1,
					startAt: 0,
				},
			},
		}).mount();
	},
	beforeDestroy () {
		glide.destroy();
	},
});
</script>

<style scoped>

.glide {
  display: flex;
  align-items: center;
}

.glide__track {
  flex: 1;
}

.glide__slide {
  text-align: center;
  height: 380px;
  line-height: 150px;
  color: #fff;
  background: transparent;
  font-size: 1em;
  font-weight: 900;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 0.7;
}

.glide__container {
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.4s ease;
	width: 75%;
	height: 75%;
}

.glide__slide[class*="active"] {
  /* background: linear-gradient(-45deg, #ed145b, #7b31f4); */
	opacity: 1;
}
.glide__slide[class*="active"] .glide__container {
  width: 100%;
	height: 100%;
}

.glide__arrows {
  padding: 5px;
}

.glide__arrow {
  position: relative;
  top: 0;
  margin: 0;
  transform: none;
  left: 0;
  right: 0;
  padding: 5px;
  background-color: #818999;
  transition: all 0.2s ease-in-out;
}

.glide__arrow:hover {
  background-color: #ed145b;
}
</style>
