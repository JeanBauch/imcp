<template>
	<div class="flex lg:justify-end items-center mb-18  scale-[90%] sm:scale-100">
		<div
			:class="disponivel ? themeColors.background : 'bg-gray'"
			class="max-w-[430px] h-[310px] lg:max-w-[570px] lg:h-[450px] flex justify-center relative items-center"
			style="border-radius: 36% 64% 79% 21% / 47% 38% 62% 53%"
		>
			<div
				:class="themeColors.borderColor"
				class="bg-white lg:w-[570px] lg:h-[450px] lg:max-w-[570px] max-w-[430px] w-full h-[310px] justify-center items-center absolute top-[15px] border bg-transparent"
				style="border-radius: 36% 64% 79% 21% / 47% 38% 62% 53%"
			/>
			<div v-if="!isNextEvent" class="w-4/5">
				<div v-if="disponivel">
					<h2 class="font-semibold text-3xl lg:text-[40px] leading-[48px] text-white">
						Venha fazer aulas de <span :class="themeColors.textColor">{{ instrumento }}</span> na nossa<br> <span :class="themeColors.textColor">Escola de Música!</span>
					</h2>
					<p class="lg:text-2xl pt-4 text-white w-11/12">
						O nosso objetivo vai além da formação musical, formando cidadãos de bem.
					</p>
				</div>
				<div v-else>
					<h2 class="font-semibold text-3xl lg:text-[40px] leading-[48px] text-white">
						Ops! Aulas de <span class="text-primary-yellow-500">{{ instrumento }} indisponíveis</span> no momento.
					</h2>
					<p class="lg:text-2xl pt-4 text-white w-11/12">
						Preencha o formulário ao lado para receber informações quando estiverem disponíveis novamente
					</p>
				</div>
			</div>

			<div v-else class="w-4/5 mt-8">
				<h2 class="font-semibold text-lg lg:text-4xl text-white">
					Venha fazer parte do Coral dos <span :class="themeColors.textColor">Canarinhos de Petrópolis!</span>
				</h2>
				<p class="lg:text-lg pt-4 text-white lg:w-[80%]">
					O nosso objetivo vai além da formação musical, formando cidadãos de bem.
				</p>
				<div class="flex mt-6 lg:mt-8">
					<Button :title="'Saiba Mais'" :color="themeColors.buttonColor" />
				</div>
			</div>
			<img src="icons/normal-colors/nota-musical(1).svg" alt="" srcset="" class="visible absolute right-0 bottom-0 w-18 h-18">
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '~/components/atoms/Button.vue';

const colorsValidator = ['yellow', 'orange', 'bordo', 'beige', 'blue'];

export default Vue.extend({
	data () {
		return {
			themeColors: {
				background: `bg-${this.bgcolor === 'blue' ? 'secondary' : 'primary'}-${this.bgcolor}-${this.bgcolorweight}`,
				textColor: `text-${this.textcolor === 'blue' ? 'secondary' : 'primary'}-${this.textcolor}-500`,
				borderColor: `border-${this.complementBorderColor === 'blue' ? 'secondary' : 'primary'}-${this.complementBorderColor}-700`,
				buttonColor: this.textcolor,
			},
		};
	},
	props: {
		bgcolor: {
			required: true,
			type: String,
			default: 'bordo',
			validator: (value: string) => colorsValidator.includes(value.toLowerCase()),
		},
		bgcolorweight: {
			required: false,
			type: String,
			default: '500',
		},
		textcolor: {
			required: true,
			type: String,
			default: 'bordo',
			validator: (value: string) => colorsValidator.includes(value.toLowerCase()),
		},
		complementBorderColor: {
			required: false,
			type: String,
			default: 'yellow',
			validator: (value: string) => colorsValidator.includes(value.toLowerCase()),
		},
		isNextEvent: {
			required: false,
			type: Boolean,
			default: false,
		},
		instrumento: {
			required: false,
			type: String,
			default: 'Piano',
		},
		disponivel: {
			required: false,
			type: Boolean,
			default: true,
		},
	},
	components: { Button },
});
</script>
