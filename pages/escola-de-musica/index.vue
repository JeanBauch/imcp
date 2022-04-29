<template>
	<div class="bg-background">
		<section class="container mx-auto px-6 sm:px-9 lg:px-24">
			<div class="flex flex-1 py-3">
				<Breadcrumb :crumbs="crumbs" />
			</div>
			<div class="flex flex-1 items-center justify-center mt-4 md:mt-6">
				<TitlePage :title="'Escola de Música'" :width="'w-full'" />
			</div>
		</section>
		<main class="container mx-auto px-6 sm:px-9 lg:px-24 mt-6 md:mt-8 lg:mt-10 mb-56">
			<div class="flex flex-col justify-center gap-6 md:gap-10 bg-white pb-2 p-6 md:p-14 rounded-3xl border border-primary-beige-300">
				<div class="flex flex-col-reverse items-center xl:flex-row gap-6 xl:gap-0 2xl:gap-20">
					<div class="text-base md:text-lg xl:max-w-[592px] text-black leading-5 md:leading-6">
						<p>
							Procuramos oferecer o melhor aos nossos alunos de instrumento no
							âmbito da formação musical, colocando a partir de 2011, aulas
							complementares no período da tarde, de
							<span class="font-semibold">teoria musical</span>,
							<span class="font-semibold">solfejo</span> e
							<span class="font-semibold">percepção musical</span>.
						</p>
						<br>
						<p>
							Esta preocupação em oferecer o melhor do ensino da música a todos
							os que procuram nossa instituição, sejam essas pessoas cantoras
							dos nossos corais ou instrumentistas, fez com que aumentasse a
							grade curricular das aulas de instrumento da Escola de Música do
							IMCP e consequentemente a carga horária do aluno semanal.
						</p>
						<br>
						<p>
							Para o IMCP é primordial que se tenha uma formação musical digna
							dos países de primeiro mundo. Reiteramos que é fundamental que as
							aulas de formação musical sejam frequentadas pelos alunos de
							instrumento a partir dos nove anos de idade, para o próprio bem de
							sua evolução musical, pois sem o embasamento teórico, o
							desenvolvimento do aluno tornar-se-á cada vez mais difícil.
						</p>
						<br>
						<p>
							As aulas de instrumentos são individuais e podem ser de 30min. e
							60min.
						</p>
					</div>
					<div
						class="w-full md:w-4/5 md:h-80 xl:w-4/5 h-60 min-h-[200px] xl:h-96 2xl:h-[460px] bg-cover bg-center bg-[url('https://www.diariodepetropolis.com.br/Conteudo/Dados_DRPTR14/acervo/1/202010/fotos/0640_x_0427_20201028181244_XMBOJ.jpg')]"
						style="border-radius: 60% 40% 33% 67% / 36% 51% 49% 64%"
					/>
				</div>

				<div>
					<h3 class="text-3xl text-black md:text-[40px] font-semibold text-center mb-16">
						Benefícios da
						<span class="text-primary-yellow-500">Formação Musical do IMCP</span>
					</h3>
					<!-- Carrossel -->
					<div class="glide">
						<div class="glide__arrows" data-glide-el="controls">
							<button class="glide__arrow glide__arrow--left" data-glide-dir="<">
								<svg class="md:hidden -rotate-90 h-28" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
									<path id="Caminho_1581" data-name="Caminho 1581" d="M.247,5.744a.88.88,0,0,1,0-1.222l4.2-4.27A.834.834,0,0,1,5.613.225L9.75,4.433a.877.877,0,0,1,0,1.222.834.834,0,0,1-1.2,0L5,2.083,1.445,5.749A.834.834,0,0,1,.247,5.744Z" transform="translate(0 0)" fill="#F7D204" />
								</svg>
								<!-- desktop -->
								<img class="rotate-180 hidden md:block" src="/icons/normal-colors/botão-slider-destaqueprev.svg" alt="" srcset="">
							</button>
						</div>
						<div class="glide__track" data-glide-el="track">
							<ul class="glide__slides">
								<li class="glide__slide">
									<div
										class="flex flex-col items-center text-center  w-full  h-[260px] hover:opacity-80 group transition-all "
									>
										<div
											class="w-30 h-28 bg-[url('~/static/icons/normal-white/lampada.svg')] bg-no-repeat bg-center bg-primary-orange-500"
											style="border-radius: 60% 40% 33% 67% / 36% 51% 49% 64%"
										/>
										<h4 class="text-xl md:text-2xl min-h-[30%]  font-medium md:font-normal text-primary-orange-500 my-6">
											MELHORA O APRENDIZADO  AINDA NA INFÂNCIA
										</h4>
										<span class="w-8 h-1 bg-primary-orange-500 rounded-[2px] group-hover:w-10 transition-all" />
									</div>
								</li>
								<li class="glide__slide">
									<div
										class="flex flex-col items-center text-center  w-full  h-[260px] hover:opacity-80 group transition-all"
									>
										<div
											class="w-30 h-28 bg-[url('~/static/icons/normal-white/pessoas.svg')] bg-no-repeat bg-center bg-primary-orange-500"
											style="border-radius: 60% 40% 33% 67% / 36% 51% 49% 64%"
										/>
										<h4 class="text-xl md:text-2xl min-h-[30%]  font-medium md:font-normal text-primary-orange-500 my-6">
											AJUDA NA EXPRESSÃO <br> CORPORAL
										</h4>
										<span class="w-8 h-1 bg-primary-orange-500 rounded-[2px] group-hover:w-10 transition-all" />
									</div>
								</li>
								<li class="glide__slide">
									<div
										class="flex flex-col items-center text-center  w-full h-[260px]  hover:opacity-80 group transition-all"
									>
										<div
											class="w-30 h-28 bg-[url('~/static/icons/normal-white/quebra-cabeca.svg')] bg-no-repeat bg-center bg-primary-orange-500"
											style="border-radius: 60% 40% 33% 67% / 36% 51% 49% 64%"
										/>
										<h4 class="text-xl md:text-2xl min-h-[30%]  font-medium md:font-normal text-primary-orange-500 my-6">
											DESENVOLVE A LINGUAGEM <br>E  A CRIATIVIDADE
										</h4>
										<span class="w-8 h-1 bg-primary-orange-500 rounded-[2px] group-hover:w-10 transition-all" />
									</div>
								</li>
								<li class="glide__slide">
									<div
										class="flex flex-col items-center text-center  w-full h-[260px]  hover:opacity-80 group transition-all"
									>
										<div
											class="w-30 h-28 bg-[url('~/static/icons/normal-white/cerebro.svg')] bg-no-repeat bg-center bg-primary-orange-500"
											style="border-radius: 60% 40% 33% 67% / 36% 51% 49% 64%"
										/>
										<h4 class="text-xl md:text-2xl min-h-[30%] font-medium md:font-normal text-primary-orange-500 my-6">
											ESTIMULA E MELHORA <br> A MEMÓRIA
										</h4>
										<span class="w-8 h-1 bg-primary-orange-500 rounded-[2px] group-hover:w-10 transition-all" />
									</div>
								</li>
							</ul>
						</div>
						<div class="glide__arrows group" data-glide-el="controls">
							<button class="glide__arrow glide__arrow--right" data-glide-dir=">">
								<svg class="md:hidden rotate-90 h-28" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
									<path id="Caminho_1581" data-name="Caminho 1581" d="M.247,5.744a.88.88,0,0,1,0-1.222l4.2-4.27A.834.834,0,0,1,5.613.225L9.75,4.433a.877.877,0,0,1,0,1.222.834.834,0,0,1-1.2,0L5,2.083,1.445,5.749A.834.834,0,0,1,.247,5.744Z" transform="translate(0 0)" fill="#F7D204" />
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
			<CardVideo />
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
			],
		};
	},
	mounted () {
		new Glide('.glide', {
			perView: 3,
			bound: true,
			animationDuration: 1000,
			breakpoints: {
				1599: {
					perView: 2,
				},
				800: {
					perView: 1,
				},
			},
		}).mount();
		// this.$glide('.glide');
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
