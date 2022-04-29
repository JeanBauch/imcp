<template>
	<div class="bg-background">
		<section class="container mx-auto px-6 sm:px-9 lg:px-24">
			<div class="flex flex-1 py-3">
				<Breadcrumb :crumbs="crumbs" />
			</div>
			<div class="flex flex-1 items-center justify-center mt-4 md:mt-6">
				<TitlePage :title="'Piano'" :width="'w-full'" />
			</div>
		</section>
		<div class="h-[120px] md:h-[500px] bg-cover my-6 md:my-8 " style="background-image: url('https://images.unsplash.com/photo-1452724931113-5ab6340ce080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')">
			<div class="hidden md:flex mx-auto  justify-end container h-[500px] items-end px-6 sm:px-9 lg:px-24">
				<img src="/icons/medium-colors/pianocurso.svg" alt="" srcset="" class="max-h-[160px] mb-4">
			</div>
		</div>
		<main
			class="mt-6 mb-56"
		>
			<div
				class="container mx-auto px-6 sm:px-9 lg:px-24"
			>
				<div class="flex flex-col justify-center gap-6 md:gap-10 bg-white md:px-14 md:pb-4 md:pt-14 rounded-3xl border border-primary-beige-300">
					<div
						class="flex flex-col-reverse items-center xl:flex-row gap-6 md:gap-20"
					>
						<div
							class="text-base md:text-lg xl:max-w-[592px] text-black leading-5 md:leading-6"
						>
							<h2 class="font-semibold text-3xl md:text-[40px] text-primary-orange-500 pb-3 md:pb-6">
								Aulas de Piano
							</h2>
							<p>
								Qualquer menino ou menina com vocação poderá ingressar no Coral
								dos Canarinhos de Petrópolis e também no Coral das Meninas dos
								Canarinhos de Petrópolis por meio do Curso de Aprendizes
								oferecido, gratuitamente, pelo Instituto dos Meninos Cantores de
								Petrópolis, para crianças do 3º ano das redes pública e particular
								de ensino.<br class="md:hidden"><br> O nosso objetivo vai além da formação musical, formando
								cidadãos de bem.
							</p>

							<div :class="aulasDisponiveis ? 'block' : 'hidden'">
								<h3 class="font-semibold text-2xl mb-2 mt-4 md:mt-4 md:mb-4">
									Aulas:
								</h3>
								<ul class="text-lg">
									<li><i class="text-primary-orange-500 text-base md:text-2xl mr-2">●</i>  Iniciação musical e flauta doce</li>
									<li class="my-1">
										<i class="text-primary-orange-500  text-base  md:text-2xl mr-2">●</i>  Teoria musical e solfejo
									</li>
									<li><i class="text-primary-orange-500 text-base  md:text-2xl mr-2">●</i> Técnica Vocal</li>
								</ul>
								<h3 class="font-semibold text-2xl my-5">
									Horário e local:
								</h3>
								<ul class="text-primary-orange-500 text-base font-normal">
									<li class="flex">
										<i class="mr-3"><img src="/icons/small-icons-colors/orange/localizacao.svg" alt="" srcset=""></i> Rua Santos Dumont, 355 | Petrópolis - RJ - Brasil
									</li>
									<li class="my-4 flex">
										<i class="mr-3"><img src="/icons/small-icons-colors/orange/calendario.svg" alt="" srcset=""></i> Terças e quintas-feiras
									</li>
									<li class="flex">
										<i class="mr-3"><img src="/icons/small-icons-colors/orange/relogio.svg" alt="" srcset=""></i> 10h
									</li>
								</ul>
							</div>
							<button class="w-[155px] md:w-[250px] h-9 md:h-12 rounded-3xl font-semibold text-base md:text-lg text-white hover:brightness-105 transition-all cursor-pointer bg-primary-orange-500 my-8">
								TENHO INTERESSE
							</button>
						</div>
						<div
							class="hidden md:block w-80 xl:w-4/5 h-60 lg:h-60 xl:h-96 2xl:h-[460px] bg-cover bg-center bg-[url('https://www.diariodepetropolis.com.br/Conteudo/Dados_DRPTR14/acervo/1/202010/fotos/0640_x_0427_20201028181244_XMBOJ.jpg')]"
							style="border-radius: 60% 40% 33% 67% / 36% 51% 49% 64%"
						/>
					</div>
				</div>
			</div>
			<div class="my-10 container mx-auto px-6 sm:px-9 lg:px-24">
				<CardProfessores :arrowcolor="'#D57032'" :color="'orange'" :imagem="'https://images.unsplash.com/photo-1561014816-50ce5acb5e73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'" />
			</div>
			<div class="bg-primary-beige-300 relative">
				<div class="container flex flex-row flex-wrap justify-center 2xl:justify-between mx-auto pt-10 px-6 sm:px-9 lg:px-24">
					<CardDescription :bgcolor="'orange'" :textcolor="'yellow'" :instrumento="'Piano'" class="z-20" :disponivel="aulasDisponiveis" />
					<Form
						:color="'orange'"
						:text="true"
						:tel="true"
						:telcolor="'#D57032'"
						:inputbg="'orange'"
						:bordercolor="'beige'"
						class="z-20"
					/>
				</div>
				<img src="complement/bg-instrumento.svg" class="absolute bottom-0 w-full" alt="" srcset="">
			</div>
			<div class="mx-auto container px-6 sm:px-9 lg:px-24">
				<CardVideo />
				<BarCursos />
			</div>
		</main>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumb from '~/components/atoms/Breadcrumb.vue';
import TitlePage from '~/components/atoms/TitlePage.vue';
import BarCursos from '~/components/molecules/BarCursos.vue';
import CardVideo from '~/components/molecules/CardVideo.vue';
import CardProfessores from '~/components/molecules/CardProfessores.vue';
import Form from '~/components/molecules/Form.vue';
import CardDescription from '~/components/molecules/CardDescription.vue';

export default Vue.extend({
	components: { Breadcrumb, TitlePage, BarCursos, CardVideo, CardProfessores, Form, CardDescription },
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
					name: 'Piano',
					url: 'instrumento-piano',
				},
			],
			aulasDisponiveis: false,
		};
	},
});
</script>
