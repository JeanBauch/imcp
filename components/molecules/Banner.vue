<template>
	<div class="image-layer-shadow h-screen flex items-center justify-center relative z-10 bg-center overflow-x-hidden bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1482627750753-afdba16659ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] after:content-['']">
		<div class="container flex flex-col items-start gap-8 relative z-10 px-6 sm:px-9 xl:px-24 mt-36 md:mt-0">
			<h1 class="text-white text-4xl font-semibold">
				Aprendiz de <span class="text-primary-yellow-500">Canarinho</span>
			</h1>
			<h3 class="text-white text-xl md:text-2xl font-medium w-2/3 md:w-2/6">
				Venha fazer parte dos corais mais famosos do Brasil!
			</h3>
			<Button :title="'Saiba Mais'" :color="'orange'" />
		</div>
		<div class="hidden md:block absolute z-20 w-full h-52 bottom-0 right-0 bg-no-repeat bg-cover" style="background-image: url('complement/ondinha-barra.svg');" />
		<div class="block md:hidden absolute z-30 bottom-0 w-full h-28 -rotate-180 bg-background clip-path-waves-mobile" />
		<img src="complement/nota-musical.svg" class="hidden lg:block lg:scale-[70%] xl:scale-100 absolute z-30 bottom-0 -left-10" alt="Elemento de composição de tela - Nota Musical">
		<div class="hidden lg:block lg:scale-[80%] xl:scale-100 absolute z-30 bottom-0 right-6 w-44 h-44 rounded-full bg-gradient-to-r from-primary-yellow-500 to-primary-orange-500" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '../atoms/Button.vue';

export default Vue.extend({
	components: { Button },
});
</script>
