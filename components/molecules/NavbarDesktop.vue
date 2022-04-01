<template>
	<nav class="hidden md:flex mx-auto">
		<ul class="flex justify-center items-center gap-7 border-t-2 border-gray border-opacity-20 w-full">
			<li v-for="(item, key) in dataHeader" :key="key" class="text-white hover:text-primary-yellow-500">
				<nuxt-link :to="item.link">
					<h5 class="py-4 border-t-2 border-transparent hover:border-t-primary-yellow-500">
						{{ item.name }}
					</h5>
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
