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
		<div
			class="h-[120px] md:h-[500px] bg-cover my-6 md:my-8"
			style="background-image: url('https://i2.wp.com/puericantores.com.br/wp-content/uploads/2014/09/frei5.jpg?ssl=1');"
		>
			<div
				class="hidden md:flex mx-auto justify-end container h-[500px] items-end px-6 sm:px-9 lg:px-24"
			>
				<img
					src="/icons/medium-colors/passarinho.svg"
					alt=""
					srcset=""
					class="max-h-[160px] mb-4"
				>
			</div>
		</div>
		<main
			class="container mx-auto px-6 sm:px-9 lg:px-24 mt-6 md:mt-8 lg:mt-10 mb-56"
		>
			<div
				class="flex flex-col justify-center gap-6 md:gap-10 bg-white pb-2 p-6 md:p-14 rounded-3xl border border-primary-beige-300"
			>
				<div
					class="flex flex-col-reverse items-center xl:flex-row gap-6 xl:gap-0 2xl:gap-20"
				>
					<div
						class="text-base md:text-lg xl:max-w-[592px] text-black leading-5 md:leading-6"
					>
						<h1 class="text-secondary-blue-500 text-[32px] md:text-[40px] font-semibold mb-4 leading-[48px]">
							Sobre o curso
						</h1>
						<p class="mb-8">
							Qualquer menino ou menina com vocação poderá ingressar no Coral
							dos Canarinhos de Petrópolis e também no Coral das Meninas dos
							Canarinhos de Petrópolis por meio do Curso de Aprendizes
							oferecido, gratuitamente, pelo Instituto dos Meninos Cantores de
							Petrópolis, para crianças do 3º ano das redes pública e particular
							de ensino.
							<br>
							<br>
							O nosso objetivo vai além da formação musical, formando
							cidadãos de bem.
						</p>

						<h2 class="text-[22px] md:text-2xl font-medium md:font-semibold mb-6 md:mb-5">
							Informações:
						</h2>

						<ul class="text-primary-bordo-500 text-base font-normal">
							<li class="flex">
								<i class="mr-3"><img src="/icons/small-icons-colors/bordo/location.svg" alt="" srcset=""></i> Rua Santos Dumont, 355 | Petrópolis - RJ - Brasil
							</li>
							<li class="my-4 flex">
								<i class="mr-3"><img src="/icons/small-icons-colors/bordo/calendario-quadrado.svg" alt="" srcset=""></i> Terças e quintas-feiras
							</li>
							<li class="flex">
								<i class="mr-3"><img src="/icons/small-icons-colors/bordo/clock.svg" alt="" srcset=""></i> 07h40 às 11h
							</li>
						</ul>

						<router-link to="/curso-de-aprendizes-inscricao?type=meninos">
							<button class="w-[213px] md:w-[335px] h-9 md:h-12 rounded-3xl font-semibold text-base md:text-lg text-white hover:brightness-110 transition-all cursor-pointer bg-secondary-blue-500 mt-4 md:mt-8">
								INSCRIÇÃO PARA MENINOS
							</button>
						</router-link> <br>

						<router-link to="/curso-de-aprendizes-inscricao?type=meninas">
							<button class="w-[213px] md:w-[335px] h-9 md:h-12 rounded-3xl font-semibold text-base md:text-lg text-white hover:brightness-110 transition-all cursor-pointer bg-primary-bordo-500 mt-2 md:mt-6">
								INSCRIÇÃO PARA MENINAS
							</button>
						</router-link>
					</div>
					<div
						class="w-full h-60 sm:min-h-[380px] md:w-4/5 md:h-80  xl:w-4/5  min-h-[200px] xl:h-96 2xl:h-[460px] bg-cover bg-center bg-[url('https://www.diariodepetropolis.com.br/Conteudo/Dados_DRPTR14/acervo/1/202010/fotos/0640_x_0427_20201028181244_XMBOJ.jpg')]"
						style="border-radius: 60% 40% 33% 67% / 36% 51% 49% 64%"
					/>
				</div>

				<div>
					<h3
						class="w-10/12 mb-8 text-center mx-auto text-3xl text-black md:text-[40px] font-semibold md:w-full md:text-left md:mb-16"
					>
						No Curso de Aprendizes, o	<span class="text-secondary-blue-500">IMCP oferece</span>
					</h3>
					<div class="glide">
						<div class="glide__arrows" data-glide-el="controls">
							<button class="glide__arrow glide__arrow--left h-28" data-glide-dir="<">
								<svg class="md:hidden -rotate-90" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
									<path id="Caminho_1581" data-name="Caminho 1581" d="M.247,5.744a.88.88,0,0,1,0-1.222l4.2-4.27A.834.834,0,0,1,5.613.225L9.75,4.433a.877.877,0,0,1,0,1.222.834.834,0,0,1-1.2,0L5,2.083,1.445,5.749A.834.834,0,0,1,.247,5.744Z" transform="translate(0 0)" fill="#62bcc4" />
								</svg>
								<!-- desktop -->
								<img class="hidden md:block rotate-180" src="/icons/normal-colors/botão-slider-destaqueprev.svg" alt="" srcset="">
							</button>
						</div>
						<div class="glide__track" data-glide-el="track">
							<ul class="glide__slides">
								<li class="glide__slide">
									<div
										class=" flex flex-col items-center text-center flex-shrink-0 w-full  md:h-[312px] hover:opacity-80 group transition-all"
									>
										<div
											class="w-30 h-28 bg-[url('~/static/icons/normal-white/micro.svg')] bg-no-repeat bg-center bg-primary-bordo-500 group-hover:bg-primary-orange-500"
											style="border-radius: 60% 40% 33% 67% / 36% 51% 49% 64%"
										/>
										<h4
											class="text-xl md:text-2xl md:h-[35%]  font-medium md:font-normal text-primary-bordo-500 my-6 hover:text-primary-orange-500 group-hover:text-primary-orange-500"
										>
											AULAS DE TÉCNICA VOCAL, TEORIA MUSICAL, SOLFEJO E RITMO
										</h4>
										<span
											class="w-8 h-1 bg-primary-bordo-500 group-hover:bg-primary-orange-500 rounded-[2px] group-hover:w-10 transition-all"
										/>
									</div>
								</li>
								<li class="glide__slide">
									<div
										class=" flex flex-col items-center text-center flex-shrink-0 w-full  md:h-[312px] hover:opacity-80 group transition-all"
									>
										<div
											class="w-30 h-28 bg-[url('~/static/icons/normal-white/aviao.svg')] bg-no-repeat bg-center bg-primary-bordo-500 group-hover:bg-primary-orange-500"
											style="border-radius: 60% 40% 33% 67% / 36% 51% 49% 64%"
										/>
										<h4
											class="text-xl md:text-2xl md:h-[35%]  font-medium md:font-normal text-primary-bordo-500 group-hover:text-primary-orange-500 my-6"
										>
											OPORTUNIDADE DE VIAJAR E CONHECER NOVOS LUGARES NO BRASIL E NO MUNDO
										</h4>
										<span
											class="w-8 h-1 bg-primary-bordo-500 group-hover:bg-primary-orange-500 rounded-[2px] group-hover:w-10 transition-all"
										/>
									</div>
								</li>
								<li class="glide__slide">
									<div
										class=" flex flex-col items-center text-center flex-shrink-0 w-full  md:h-[312px] hover:opacity-80 group transition-all"
									>
										<div
											class="w-30 h-28 bg-[url('~/static/icons/normal-white/comida.svg')] bg-no-repeat bg-center bg-primary-bordo-500 group-hover:bg-primary-orange-500"
											style="border-radius: 60% 40% 33% 67% / 36% 51% 49% 64%"
										/>
										<h4
											class="text-xl md:text-2xl md:h-[35%] font-medium md:font-normal text-primary-bordo-500 group-hover:text-primary-orange-500 my-6"
										>
											ALMOÇO GRATUITO COM OS COLEGAS APÓS AS AULAS
										</h4>
										<span
											class="w-8 h-1 bg-primary-bordo-500 group-hover:bg-primary-orange-500 rounded-[2px] group-hover:w-10 transition-all"
										/>
									</div>
								</li>
							</ul>
						</div>
						<div class="glide__arrows group" data-glide-el="controls">
							<button class="glide__arrow glide__arrow--right" data-glide-dir=">">
								<svg class="md:hidden rotate-90 h-28" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
									<path id="Caminho_1581" data-name="Caminho 1581" d="M.247,5.744a.88.88,0,0,1,0-1.222l4.2-4.27A.834.834,0,0,1,5.613.225L9.75,4.433a.877.877,0,0,1,0,1.222.834.834,0,0,1-1.2,0L5,2.083,1.445,5.749A.834.834,0,0,1,.247,5.744Z" transform="translate(0 0)" fill="#62bcc4" />
								</svg>

								<!-- <img src="/icons/normal-colors/botão-slider-destaque.svg" alt="" srcset=""> -->

								<svg
									id="botão-slider-destaque"
									xmlns="http://www.w3.org/2000/svg"
									width="40"
									height="40"
									viewBox="0 0 40 40"
									class="group-hover:bg-primary-bordo-500 rounded-full hidden md:block"
								>
									<g id="Icon_ionic-ios-arrow-dropdown" data-name="Icon ionic-ios-arrow-dropdown" transform="translate(0 40) rotate(-90)">
										<path
											id="Caminho_1581"
											class="group-hover:fill-white"
											data-name="Caminho 1581"
											d="M10.522,14.964a1.876,1.876,0,0,0,0,2.633L19.7,26.8a1.842,1.842,0,0,0,2.551.058L31.3,17.79a1.853,1.853,0,1,0-2.609-2.633l-7.769,7.7-7.779-7.9A1.842,1.842,0,0,0,10.522,14.964Z"
											transform="translate(-0.919 0.66)"
											fill="#991c3a"
										/>
										<path
											id="Caminho_1582"
											data-name="Caminho 1582"
											d="M3.375,23.375a20,20,0,1,0,20-20A20,20,0,0,0,3.375,23.375ZM35.337,11.413A16.916,16.916,0,1,1,11.413,35.337,16.916,16.916,0,1,1,35.337,11.413Z"
											transform="translate(-3.375 -3.375)"
											fill="#991c3a"
										/>
									</g>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
			<CardVideo :color="'blue'" />
			<BarCursos />
		</main>
	</div>
</template>

<script lang="ts">
import Glide from '@glidejs/glide';
import Vue from 'vue';
import Breadcrumb from '~/components/atoms/Breadcrumb.vue';
import TitlePage from '~/components/atoms/TitlePage.vue';
import BarCursos from '~/components/molecules/BarCursos.vue';
import CardVideo from '~/components/molecules/CardVideo.vue';

export default Vue.extend({
	components: { Breadcrumb, TitlePage, BarCursos, CardVideo },
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
			],
		};
	},
	mounted () {
		new Glide('.glide', {
			perView: 3,
			animationDuration: 1000,
			bound: true,
			breakpoints: {
				1599: {
					perView: 2,
				},
				800: {
					perView: 1,
				},
			},
		}).mount();
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
  transition: all 0.2s ease-in-out;
	box-shadow: none;
}
</style>
