<template>
	<nav id="navList" class="h-0 container mx-auto items-center justify-start px-6 sm:px-9 rounded-b-3xl transition-all ease-in-out duration-700 md:hidden">
		<ul class="flex flex-col gap-2 border-t-2 border-gray border-opacity-20 w-full pt-4 invisible opacity-0">
			<li v-for="(item, key) in dataHeader" :key="key" class="text-white hover:font-semibold">
				<nuxt-link :to="item.link">
					{{ item.name }}
				</nuxt-link>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data () {
		return {
			dataHeader: [
				{
					name: 'Início',
					link: '/',
				},
				{
					name: 'Instituto',
					link: '/',
				},
				{
					name: 'Escola de Música',
					link: '/',
				},
				{
					name: 'Midia',
					link: '/',
				},
				{
					name: 'Noticias',
					link: '/',
				},
				{
					name: 'Agenda',
					link: '/',
				},
				{
					name: 'Contato',
					link: '/',
				},
				{
					name: 'Transparência',
					link: '/',
				},
			],
		};
	},
});
</script>
