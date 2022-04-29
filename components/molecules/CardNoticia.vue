<template>
	<div class="flex justify-center cursor-pointer">
		<div class="min-h-full max-w-[375px] sm:max-w-none overflow-hidden flex flex-col justify-between p-8 rounded-3xl relative z-10 group">
			<div class="absolute top-0 left-0 z-10 rounded-3xl transition-all ease-in-out duration-300 group-hover:scale-[1.15] layer-shadow-gradient-black w-full h-full bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1566409030728-5561841a93b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')]" />
			<div class="relative z-10">
				<div class="flex justify-end md:justify-between">
					<FloatSmallButton :icon="'calendario'" class="hidden md:block" />
					<FloatSmallButton />
				</div>
				<article :class="isLarger ? 'xl:mt-40':'xl:mt-28'" class="flex flex-col gap-2 mt-16">
					<h4 class="text-white text-lg xl:text-2xl uppercase font-semibold">
						CORAL DAS MENINAS DOS CANARINHOS CELEBRA 33 ANOS
					</h4>
					<h6 class="text-white text-xs xl:text-lg">
						Festividades do 33º aniversário do Coral das Meninas dos Canarinhos de Petrópolis!
					</h6>
					<nuxt-link to="noticias-detalhes">
						<h5 class="text-primary-orange-300 font-semibold text-base uppercase underline mt-2">
							Leia mais
						</h5>
					</nuxt-link>
				</article>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import FloatSmallButton from '../atoms/FloatSmallButton.vue';

export default Vue.extend({
	components: { FloatSmallButton },
	props: {
		isLarger: {
			type: Boolean,
			default: false,
		},
	},
});
</script>
