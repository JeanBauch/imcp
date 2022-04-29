<template>
	<div class="bg-white grid grid-cols-1 lg:grid-cols-2 gap-20 p-6 md:p-14 justify-items-center rounded-[30px] border border-primary-beige-300">
		<div class="w-full h-[425px] rounded-[32px] hidden md:block" :style="{background: `url(${imagem})`}" />
		<div class="flex flex-col justify-center">
			<h1 class="text-3xl md:text-[40px] font-semibold mb-10">
				Professores <span :class="themeColors.textColor">Responsáveis</span>
			</h1>

			<div v-for="(item, key) in dataProfessores" :key="key" class="flex items-center justify-left mb-8 text-2xl">
				<i class="w-18 h-18 min-w-[62px] md:w-20 md:h-20 md:min-w-[80px] rounded-full mr-4 lg:mr-8" :style="{ background: `url(${item.imagem}) center / cover`}" />
				<div class="flex flex-col justify-center ">
					<span class="font-medium md:font-normal text-xl md:text-2xl">{{ item.nome }}</span>
					<a :href="item.link" class="underline flex gap-8 items-center text-base md:text-2xl" :class="themeColors.textColor">VER CURRÍCULO <i><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18.828" viewBox="0 0 18 18.828" class="hover:translate-x-4 transition-all">
						<g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(1 1.414)">
							<path
								id="Caminho_1292"
								data-name="Caminho 1292"
								d="M7.5,18h16"
								transform="translate(-7.5 -10)"
								fill="none"
								:stroke="arrowcolor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
							<path
								id="Caminho_1293"
								data-name="Caminho 1293"
								d="M18,7.5l8.4,8-8.4,8"
								transform="translate(-10.395 -7.5)"
								fill="none"
								:stroke="arrowcolor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
						</g>
					</svg>
					</i></a>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	data () {
		return {
			dataProfessores: [
				{
					nome: 'Profº Marco Aurélio Lischt',
					imagem: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80',
					link: '#',
				},
				{
					nome: 'Profª Elza Pereira',
					imagem: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
					link: '#',
				},
			],
			themeColors: {
				textColor: `text-${this.color === 'blue' ? 'secondary' : 'primary'}-${this.color}-500`,
				btnColor: `bg-${this.color === 'blue' ? 'secondary' : 'primary'}-${this.color}-500`,
			},
		};
	},
	props: {
		imagem: {
			required: false,
			type: String,
			default: 'none',
		},
		color: {
			required: true,
			type: String,
			default: 'bordo',
			validator: (value: string) => [
				'yellow',
				'orange',
				'bordo',
				'beige',
				'blue',
			].includes(value.toLowerCase()),
		},
		arrowcolor: {
			required: false,
			type: String,
			default: '#991C3A',
		},
	},
});
</script>
